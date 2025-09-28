import { useCallback } from 'react';
import info from '../assets/data/myProfile.json' assert {type: 'json'}

const useProfileInfo = () => {
    const getName = useCallback(() => {
        if (!info.name) return "No name provided"
        return info.name
    }, [info])

    const getSecondaryName = useCallback(() => {
        if (!info.secName) {
            console.warn("No secondary name provided, trying to use name instead")
            return getName();
        }
        return info.secName
    }, [info])

    const getAvatar = useCallback(() => {
        if (!info.imgAvatar) return "No avatar provided"
        return info.imgAvatar
    }, [info])

    const getDescription = useCallback(() => {
        if (!info.desc) return ["No description provided"]
        return info.desc
    }, [info])

    return {
        getName,
        getSecondaryName,
        getAvatar,
        getDescription,
    }
}

export default useProfileInfo;