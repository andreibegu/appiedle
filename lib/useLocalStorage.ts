import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

export default function useLocalStorage<T>(
    key: string,
    defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
    const isMounted = useRef(false)
    const [value, setValue] = useState<T>(defaultValue)

    const currentDay = new Date().getDay().toString();

    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key);
            const day = window.localStorage.getItem(key + 'day');
            if (item && day == currentDay) {
                setValue(JSON.parse(item))
            } else {
                window.localStorage.removeItem(key);
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
            window.localStorage.setItem(key + 'day', currentDay);
        } else {
            isMounted.current = true;
        }
    }, [key, value]);

    return [value, setValue];
}