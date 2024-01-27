import { Dimensions, Platform, PixelRatio } from 'react-native';
import Moon1 from '../assets/images/moon_phase/1'
import Moon2 from '../assets/images/moon_phase/2'
import Moon3 from '../assets/images/moon_phase/3'
import Moon4 from '../assets/images/moon_phase/4'
import Moon5 from '../assets/images/moon_phase/5'
import Moon6 from '../assets/images/moon_phase/6'
import Moon7 from '../assets/images/moon_phase/7'
import Moon8 from '../assets/images/moon_phase/8'
import Moon9 from '../assets/images/moon_phase/9'
import Moon10 from '../assets/images/moon_phase/10'
import Moon11 from '../assets/images/moon_phase/11'
import Moon12 from '../assets/images/moon_phase/12'
import Moon13 from '../assets/images/moon_phase/13'
import Moon14 from '../assets/images/moon_phase/14'
import Moon15 from '../assets/images/moon_phase/15'
import Moon16 from '../assets/images/moon_phase/16'
import Moon17 from '../assets/images/moon_phase/17'
import Moon18 from '../assets/images/moon_phase/18'
import Moon19 from '../assets/images/moon_phase/19'
import Moon20 from '../assets/images/moon_phase/20'
import Moon21 from '../assets/images/moon_phase/21'
import Moon22 from '../assets/images/moon_phase/22'
import Moon23 from '../assets/images/moon_phase/23'
import Moon24 from '../assets/images/moon_phase/24'
import Moon25 from '../assets/images/moon_phase/25'
import Moon26 from '../assets/images/moon_phase/26'
import Moon27 from '../assets/images/moon_phase/27'
import Moon28 from '../assets/images/moon_phase/28'
import Moon29 from '../assets/images/moon_phase/29'
import Moon30 from '../assets/images/moon_phase/30'
import Moon31 from '../assets/images/moon_phase/31'

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export const normalize = (size) => {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export const W = SCREEN_WIDTH;
export const H = SCREEN_HEIGHT;

export const colors = {
    white: '#FFF',
    whiteWithAlpha75: 'rgba(255,255,255,0.75)',
    whiteWithAlpha95: 'rgba(255,255,255,0.95)',
    black: '#000',
    blackWithAlpha12: 'rgba(0,0,0,0.12)',
    blackWithAlpha75: 'rgba(0,0,0,0.75)',
    primaryColor: '#5856D6',
    secondaryColor: 'rgba(94, 92, 230, 0.5)',
    grey: 'rgba(60, 60, 67, 0.6)',
    lightGrey: 'rgba(120, 120, 128, 0.16)',
    xLightGrey: 'rgba(116, 116, 128, 0.08)',
    red: '#FF375F'
}

export const fontFamilies = {
    default: 'SF Pro Display'
}

export const fontSizes = {
    small: normalize(11),
    default: normalize(15),
    large: normalize(17),
    xxLarge: normalize(30)
}

export const fontWeights = {
    default: '400',
    bold: '700'
}

export const formatTimeTrack = (seconds) => {
    let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

export const CITY_API_URL = 'https://api.api-ninjas.com/v1/city';
export const CITY_API_KEY = 'WQc9I9TNQzCsRk/UhC1h+Q==1CIw9NMVMTTd1fOo';

export const MoonPhases = [
    {
        name: 'Новолуние',
        image: <Moon1 />,
        bgColor: ['#D0EAC9', '#E8F5E5', '#E8F5E5']
    },
    {
        name: 'Новолуние',
        image: <Moon2 />,
        bgColor: ['#D0EAC9', '#E8F5E5', '#E8F5E5']
    },
    {
        name: 'Новолуние',
        image: <Moon3 />,
        bgColor: ['#D0EAC9', '#E8F5E5', '#E8F5E5']
    },
    {
        name: 'Новолуние',
        image: <Moon4 />,
        bgColor: ['#D0EAC9', '#E8F5E5', '#E8F5E5']
    },
    {
        name: 'Новолуние',
        image: <Moon5 />,
        bgColor: ['#D0EAC9', '#E8F5E5', '#E8F5E5']
    },
    {
        name: 'Новолуние',
        image: <Moon6 />,
        bgColor: ['#D0EAC9', '#E8F5E5', '#E8F5E5']
    },
    {
        name: 'Новолуние',
        image: <Moon7 />,
        bgColor: ['#D0EAC9', '#E8F5E5', '#E8F5E5']
    },
    {
        name: 'Новолуние',
        image: <Moon8 />,
        bgColor: ['#D0EAC9', '#E8F5E5', '#E8F5E5']
    },
    {
        name: 'Растущая луна',
        image: <Moon9 />,
        bgColor: ['#F7E3FD', '#FBF1FE']
    },
    {
        name: 'Растущая луна',
        image: <Moon10 />,
        bgColor: ['#F7E3FD', '#FBF1FE']
    },
    {
        name: 'Растущая луна',
        image: <Moon11 />,
        bgColor: ['#F7E3FD', '#FBF1FE']
    },
    {
        name: 'Растущая луна',
        image: <Moon12 />,
        bgColor: ['#F7E3FD', '#FBF1FE']
    },
    {
        name: 'Растущая луна',
        image: <Moon13 />,
        bgColor: ['#F7E3FD', '#FBF1FE']
    },
    {
        name: 'Растущая луна',
        image: <Moon14 />,
        bgColor: ['#F7E3FD', '#FBF1FE']
    },
    {
        name: 'Растущая луна',
        image: <Moon15 />,
        bgColor: ['#F7E3FD', '#FBF1FE']
    },
    {
        name: 'Растущая луна',
        image: <Moon16 />,
        bgColor: ['#F7E3FD', '#FBF1FE']
    },
    {
        name: 'Убывающая луна',
        image: <Moon17 />,
        bgColor: ['#EBE9C9', '#F5F4E5']
    },
    {
        name: 'Убывающая луна',
        image: <Moon18 />,
        bgColor: ['#EBE9C9', '#F5F4E5']
    },
    {
        name: 'Убывающая луна',
        image: <Moon19 />,
        bgColor: ['#EBE9C9', '#F5F4E5']
    },
    {
        name: 'Убывающая луна',
        image: <Moon20 />,
        bgColor: ['#EBE9C9', '#F5F4E5']
    },
    {
        name: 'Убывающая луна',
        image: <Moon21 />,
        bgColor: ['#EBE9C9', '#F5F4E5']
    },
    {
        name: 'Убывающая луна',
        image: <Moon22 />,
        bgColor: ['#EBE9C9', '#F5F4E5']
    },
    {
        name: 'Убывающая луна',
        image: <Moon23 />,
        bgColor: ['#EBE9C9', '#F5F4E5']
    },
    {
        name: 'Убывающая луна',
        image: <Moon24 />,
        bgColor: ['#EBE9C9', '#F5F4E5']
    },
    {
        name: 'Полнолуние',
        image: <Moon25 />,
        bgColor: ['#E5E7FE', '#F2F3FE']
    },
    {
        name: 'Полнолуние',
        image: <Moon26 />,
        bgColor: ['#E5E7FE', '#F2F3FE']
    },
    {
        name: 'Полнолуние',
        image: <Moon27 />,
        bgColor: ['#E5E7FE', '#F2F3FE']
    },
    {
        name: 'Полнолуние',
        image: <Moon28 />,
        bgColor: ['#E5E7FE', '#F2F3FE']
    },
    {
        name: 'Полнолуние',
        image: <Moon29 />,
        bgColor: ['#E5E7FE', '#F2F3FE']
    },
    {
        name: 'Полнолуние',
        image: <Moon30 />,
        bgColor: ['#E5E7FE', '#F2F3FE']
    },
    {
        name: 'Полнолуние',
        image: <Moon31 />,
        bgColor: ['#E5E7FE', '#F2F3FE']
    },
]