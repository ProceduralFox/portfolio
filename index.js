console.log('%c Thanks for taking a look at my portfolio ! %c:)', 'color: #03AC13', 'color:#0047AB');

/// 

function myFunction(e){
    window.open(e.currentTarget.attributes.link.value, "_blank");
}

const slideOptions={
    treshold: 1.0
}

/// SLIDE IN ANIMATION HANDLING

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        const project = entry.target
        // const projects = entry.target.querySelectorAll('.projects')

        if(entry.isIntersecting) {
            if(project.classList.contains("left")){
                project.classList.add('slide-animation')
                return;
            } else {
                project.classList.add('slide-animation2')
                return;
            }

        }

        project.classList.remove('slide-animation')
        project.classList.remove('slide-animation2')
    });
}, slideOptions);

const projects = document.querySelectorAll('.project')

projects.forEach(project => {
    observer.observe(project)
})


// FADE IN ANIMATION HANDLING

const observer_visible = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        const project = entry.target

        if(entry.isIntersecting){
            project.classList.add('visible-animation')
            return;
        }

        project.classList.remove('visible-animation')
    });
}, slideOptions)

const fade_ins = document.querySelectorAll('.invisible')

fade_ins.forEach(project=>{
    observer_visible.observe(project)
})
