import { useRef, useState, useEffect } from 'react';
import api from '../api/request';
import request from '../api/request';
type Cache<T> = { [url: string]: T };
export function useGet<T = unknown>(url: string, params?: any) {
    const cache = useRef<Cache<T>>({});
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setResponse(null);
            if (cache.current[url]) {
                setResponse(cache.current[url]);
                setIsLoading(false);
                setError(undefined);
                return;
            }
            try {
                const res = await api.get<T>(url, params);
                if (res.status !== 200) {
                    throw new Error(res.statusText);
                }
                const json = res.data as T;
                cache.current[url] = json;
                setResponse(json);
                setIsLoading(false);
                setError(undefined);
            } catch (error) {
                setResponse(null);
                setIsLoading(false);
                setError(error);
            }
        };
        fetchData();
    }, [url]);
    return { response, error, isLoading };
}
export function usePost(url: string) {
    const [response, setResponse] = useState<string | null>(null);
    const [error, setError] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const postData = async (params: any) => {
        setIsLoading(true);
        setResponse(null);
        try {
            const res = await api.post(url, params);
            if (res.status !== 200) {
                throw new Error(res.statusText);
            }
            const json = res.data as string;
            setResponse(json);
            setIsLoading(false);
            setError(undefined);
        } catch (error) {
            setResponse(null);
            setIsLoading(false);
            setError(error);
        }
    };
    return { response, error, isLoading, postData };
}
