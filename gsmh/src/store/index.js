import { createStore } from 'vuex'

const store = createStore({
    state: {
        programmes: [
            {   
                'img': require('@/assets/images/programmes/1.png'),
                'title':'Anesthesiology',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':1
            },
            {   
                'img': require('@/assets/images/programmes/2.png'),
                'title':'Cardiothoracic Surgery',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':2
            },
            {   
                'img': require('@/assets/images/programmes/2.png'),
                'title':'General Surgery',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':2
            },
            {   
                'img': require('@/assets/images/programmes/4.png'),
                'title':'Nephrology',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':1
            },
            {   
                'img': require('@/assets/images/programmes/5.png'),
                'title':'Neurosurgery',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':1
            },
            {   
                'img': require('@/assets/images/programmes/6.png'),
                'title':'Obstretics & Gynaecology',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':1
            },
            {   
                'img': require('@/assets/images/programmes/7.png'),
                'title':'Ophthalmology',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':1
            },
            {   
                'img': require('@/assets/images/programmes/8.png'),
                'title':'Orthopedic Surgery',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':2
            },
            {   
                'img': require('@/assets/images/programmes/9.png'),
                'title':'Paediatrics',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':2
            },
            {   
                'img': require('@/assets/images/programmes/10.png'),
                'title':'Pathology',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':1
            },
            {   
                'img': require('@/assets/images/programmes/11.png'),
                'title':'Plastic Surgery',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':1
            },
            {   
                'img': require('@/assets/images/programmes/12.png'),
                'title':'Psychiatry',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':1
            },
            {   
                'img': require('@/assets/images/programmes/13.png'),
                'title':'Radiology',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':2
            },
            {   
                'img': require('@/assets/images/programmes/14.png'),
                'title':'Surgical Oncology',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':1
            },
            {   
                'img': require('@/assets/images/programmes/15.png'),
                'title':'Trauma Surgery',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':1
            },
            {   
                'img': require('@/assets/images/programmes/16.png'),
                'title':'Urology',
                'description':'Proin semper luctus lorem, sit amet tincidunt metus efficitur quis. Cras libero libero, ornare sit amet nisl in',
                'type':2
            },
        ],
        testimonials: [
        {
            'number':'RESIDENT TESTIMONIAL 1',
            'text':'I had already completed my 4-year residency in General Surgery when I had the strong calling to switch over to OB/GYN. Chief Bailey and my superior attendings were very supportive of my decision. I basically had to restart from square one but if I had to do it all over again, I will.',
            'name': 'Dr. Josephine Wilson',
            'position': 'First year resident in Obstretics & Gynaecology,<br>Former Attending General Surgeon',
            'imgBig': require('@/assets/images/jo.png'),
            'imgSmall': require('@/assets/images/jo-mobile.png')
        },
        {
            'number':'RESIDENT TESTIMONIAL 2',
            'text':'Suspendisse vehicula diam in velit sagittis sagittis. Phasellus ut tempus libero, eget dignissim ipsum. Nulla facilisi. Nam nec eros risus. Aenean id gravida ante. Phasellus posuere, libero et lacinia cursus, odio nisi vulputate mauris, in dictum lorem mi at velit. Phasellus molestie pulvinar orci.',
            'name': 'Dr. Levi Schmitt',
            'position': 'Surgical Resident',
            'imgBig': require('@/assets/images/levi.png'),
            'imgSmall': require('@/assets/images/levi-mobile.png'),
        }
        ]
    },
    getters: {
        programmes: function(state){
            return state.programmes
        },
        testimonials: function(state){
            return state.testimonials
        }
    }
})

export default store;