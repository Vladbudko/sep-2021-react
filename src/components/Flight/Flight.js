export default function Flight({item: value}) {
    return (
        <div className={'flight'}>
            <div className={'name'}>
                {value.mission_name}
            </div>

            <div className={'year'}>
                 {value.launch_year}
            </div>

            <img src={value.links.mission_patch} alt={'mission_patch'}/>
        </div>
    )
}
