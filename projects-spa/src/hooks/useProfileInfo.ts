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

    const getGitHub = useCallback(() => {
        if (!info.gitHubURL) {
            console.error("No GitHub URL provided")
            return
        }
        return info.gitHubURL
    }, [info])

    const getLinkedIn = useCallback(() => {
        if (!info.linkedInURL) {
            console.error("No LinkedIn URL provided")
            return
        }
        return info.linkedInURL
    }, [info])

    return {
        getName,
        getSecondaryName,
        getAvatar,
        getDescription,
        getGitHub,
        getLinkedIn,
    }
}

export default useProfileInfo;