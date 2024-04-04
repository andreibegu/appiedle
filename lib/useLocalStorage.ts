import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

export default function useLocalStorage<T>(
    key: string,
    defaultValue: T,
    currentId: string
): [T, Dispatch<SetStateAction<T>>] {
    const isMounted = useRef(false)
    const [value, setValue] = useState<T>(defaultValue)

    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key);
            const id = window.localStorage.getItem(key + 'id');
            if (item && id == currentId) {
                setValue(JSON.parse(item))
            } else {
                window.localStorage.removeItem(key);
                window.localStorage.setItem(key + 'id', currentId);
            }
        } catch (e) {
            console.log(e);
        }
        return () => {
            isMounted.current = false;
        }
    }, [key]);

    useEffect(() => {
        if (isMounted.current) {
            window.localStorage.setItem(key, JSON.stringify(value));
            window.localStorage.setItem(key + 'id', currentId);
        } else {
            isMounted.current = true;
        }
    }, [key, value]);

    return [value, setValue];
}