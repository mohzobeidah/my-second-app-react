export default function Link (props) {
    
    console.log(props);
    
    return(
        <a href={props.href} >{props.name}</a>
    )
}