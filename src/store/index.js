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
                'img': require('@/assets/images/programmes/3.png'),
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
        ],
        faqResidency:[
            {
                'title':'How long is a residency programme?',
                'description': 'Nullam quis nulla egestas, porttitor ligula ut, efficitur nibh. Phasellus pretium suscipit nulla eu tempus. Nulla sodales elit est, ac cursus ligula fermentum quis. Nulla in dolor a ante porttitor accumsan ut vel quam. Duis finibus neque et urna venenatis tempor. Fusce vitae risus lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                'target': '#panelsStayOpen-collapseOne',
                'targetId': 'panelsStayOpen-collapseOne',
                'headerId': 'panelsStayOpen-headingOne'
            },
            {
                'title':'Am I allowed to switch programmes after it has commenced?',
                'description': 'auris interdum felis nisl. Nam gravida tortor ultricies ex egestas, eget vehicula mauris cursus. Curabitur non felis odio. Sed porta sagittis nunc, a venenatis enim porta in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ut ex at nunc lacinia hendrerit a quis mi. Ut gravida feugiat turpis, vel venenatis quam facilisis at. In bibendum nunc id augue molestie malesuada at sed enim.',
                'target': '#panelsStayOpen-collapseTwo',
                'targetId': 'panelsStayOpen-collapseTwo',
                'headerId': 'panelsStayOpen-headingTwo'
            },
            {
                'title':'Can I appeal to get my first choice?',
                'description': 'Maecenas vel maximus diam, in posuere sapien. Sed varius leo non iaculis elementum. Duis sem sapien, accumsan ut nisl id, placerat maximus libero. Aliquam dui ipsum, venenatis eget ex in, iaculis facilisis diam. Sed justo neque, elementum a commodo ut, fermentum vitae metus. Suspendisse semper augue at tellus congue consectetur',
                'target': '#panelsStayOpen-collapseThree',
                'targetId': 'panelsStayOpen-collapseThree',
                'headerId': 'panelsStayOpen-headingThree'
            }
        ],
        faqApplication:[
            {
                'title':'Who is eligible to apply?',
                'description': 'Nullam quis nulla egestas, porttitor ligula ut, efficitur nibh. Phasellus pretium suscipit nulla eu tempus. Nulla sodales elit est, ac cursus ligula fermentum quis. Nulla in dolor a ante porttitor accumsan ut vel quam. Duis finibus neque et urna venenatis tempor. Fusce vitae risus lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                'target': '#panelsStayOpen-collapseOne',
                'targetId': 'panelsStayOpen-collapseOne',
                'headerId': 'panelsStayOpen-headingOne'
            },
            {
                'title':'What documents are required for submission?',
                'description': 'Auris interdum felis nisl. Nam gravida tortor ultricies ex egestas, eget vehicula mauris cursus. Curabitur non felis odio. Sed porta sagittis nunc, a venenatis enim porta in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ut ex at nunc lacinia hendrerit a quis mi. Ut gravida feugiat turpis, vel venenatis quam facilisis at. In bibendum nunc id augue molestie malesuada at sed enim.',
                'target': '#panelsStayOpen-collapseTwo',
                'targetId': 'panelsStayOpen-collapseTwo',
                'headerId': 'panelsStayOpen-headingTwo'
            },
            {
                'title':'When will I be called for an interview?',
                'description': 'Maecenas vel maximus diam, in posuere sapien. Sed varius leo non iaculis elementum. Duis sem sapien, accumsan ut nisl id, placerat maximus libero. Aliquam dui ipsum, venenatis eget ex in, iaculis facilisis diam. Sed justo neque, elementum a commodo ut, fermentum vitae metus. Suspendisse semper augue at tellus congue consectetur',
                'target': '#panelsStayOpen-collapseThree',
                'targetId': 'panelsStayOpen-collapseThree',
                'headerId': 'panelsStayOpen-headingThree'
            }
        ],
        faqOpenHouse:[
            {
                'title':'Can I cancel or postpone my reserved slot?',
                'description': 'Vestibulum nec urna ante. Sed vulputate arcu nisl, eu fringilla magna suscipit sed. In quam nisl, volutpat imperdiet dignissim dignissim, interdum ut eros.',
                'target': '#panelsStayOpen-collapseOne',
                'targetId': 'panelsStayOpen-collapseOne',
                'headerId': 'panelsStayOpen-headingOne'
            },
            {
                'title':'Can I reserve slots for groups?',
                'description': 'Nam in libero pellentesque, vulputate quam sed, ultricies sem.',
                'target': '#panelsStayOpen-collapseTwo',
                'targetId': 'panelsStayOpen-collapseTwo',
                'headerId': 'panelsStayOpen-headingTwo'
            },
            {
                'title':'Will there be any weekend slots?',
                'description': 'Suspendisse massa lorem, venenatis id scelerisque et, viverra eu est.',
                'target': '#panelsStayOpen-collapseThree',
                'targetId': 'panelsStayOpen-collapseThree',
                'headerId': 'panelsStayOpen-headingThree'
            } 
        ]
    },
    getters: {
        programmes: function(state){
            return state.programmes
        },
        testimonials: function(state){
            return state.testimonials
        },
        faqResidency: function(state){
            return state.faqResidency
        },
        faqApplication: function(state){
            return state.faqApplication
        },
        faqOpenHouse: function(state){
            return state.faqOpenHouse
        },
    }
})

export default store;