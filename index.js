document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach(skill => {
        skill.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#3c8dbc';
        });
        skill.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#35424a';
        });
    });
});
