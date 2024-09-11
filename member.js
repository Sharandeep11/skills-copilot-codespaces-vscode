function skillsMember(){
return{
    restrict : 'E',
    templateUrl: 'modules/skills/views/member.html',
    cobntroller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
        member: 'm'
    }
};
}
    