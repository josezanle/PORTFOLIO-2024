import React from 'react'

import { ArrowLong } from './arrowLong'
import { World } from './world'
import { Check } from './check'
import { Sms } from './sms'
import { ArrowShortDown } from './arrowShortDown'
import { ArrowShortUp } from './arrowShortUp'
import { Star } from './star'
import { Menu } from './menu'
import { Resume } from './resume'
import { Medical } from './medical'
import { Sun } from './sun'
import { Moon } from './Moon'
import { Watch } from './watch'
import { Download } from './download'
import { Close } from './close'

export const Icon = ({ name = "applause", size = 20, fill = "silver", onClick = () => { } }) => {
    switch (name) {
        case "arrow-short-down":
            return <ArrowShortDown size={size} fill={fill} onClick={onClick} />

        case "arrow-short-up":
            return <ArrowShortUp size={size} fill={fill} onClick={onClick} />

        case "close":
            return <Close size={size} fill={fill} onClick={onClick} />

        case "download":
            return <Download size={size} fill={fill} onClick={onClick} />

        case "watch":
            return <Watch size={size} fill={fill} onClick={onClick} />

        case "arrow-large":
            return <ArrowLong size={size} fill={fill} onClick={onClick} />

        case "check":
            return <Check size={size} fill={fill} onClick={onClick} />

        case "menu":
            return <Menu size={size} fill={fill} onClick={onClick} />

        case "medical":
            return <Medical size={size} fill={fill} onClick={onClick} />

        case "moon":
            return <Moon size={size} fill={fill} onClick={onClick} />

        case "sms":
            return <Sms size={size} fill={fill} onClick={onClick} />

        case "sun":
            return <Sun size={size} fill={fill} onClick={onClick} />

        case "resume":
            return <Resume size={size} fill={fill} onClick={onClick} />

        case "star":
            return <Star size={size} fill={fill} onClick={onClick} />

        case "world":
            return <World size={size} fill={fill} onClick={onClick} />
    }

}