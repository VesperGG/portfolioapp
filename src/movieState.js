import greenbook from '../src/img/greenbook.png';
import greenbook2 from '../src/img/greenbook.png';
import dota2 from '../src/img/dota2.png';
import dota22 from '../src/img/dota2.png';



export const MovieState = () => {
    return [
        {
            title: 'greenbook',
            mainImg: greenbook,
            secondaryImg: greenbook2,
            url: '/work/greenbook',
            awards: [
                {
                    title: "Truly a Title",
                    description: '"lorem lorem lorem lorem lorem"'
                },
                {
                    title:"Fresh look",
                    description: "Test test"
                },
                {
                    title:"Silmarilion look",
                    description: "Blgh gerdana"
                },

            ],
        },
        {
            title: 'The Athlete 2',
            mainImg: dota2,
            secondaryImg: dota2,
            url: '/work/dota2',
            awards: [
                {
                    title: "Truly a Title",
                    description: '"lorem lorem lorem lorem lorem"'
                },
                {
                    title:"Fresh look",
                    description: "Test test"
                },
                {
                    title:"Silmarilion look",
                    description: "Blgh gerdana"
                },

            ],
        },
        {
            title: 'The Athlete 4',
            mainImg: dota2,
            secondaryImg: dota2,
            url: '/work/the-athlete4',
            awards: [
                {
                    title: "Truly a Title44",
                    description: '"lorem lorem lorem lorem lorem"'
                },
                {
                    title:"Fresh look44",
                    description: "Test test"
                },
                {
                    title:"Silmarilion look44",
                    description: "Blgh gerdana"
                },

            ]
        }
    ]
}