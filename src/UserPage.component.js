class UserPageComponent {
    constructor(userId){
        this.userId = userId;
    }

    getUser() {
        userService
            .getUser(this.userId)
            .then( this.appendUserDetails.bind(this) );
    }

    appendUserDetails(user){
        let userComponent = new UserDetailsComponent(user);
        this.element.append( userComponent.render() );
    }

    render(){
        this.element = $(`<main></main>`);
        this.getUser();
        return this.element;
    }
}
