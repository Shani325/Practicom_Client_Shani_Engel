import { useForm } from 'react-hook-form';

// export default function FormChild() {

//     // const [usersArr, setUsersArr] = useState([])
//     const userCtx = useContext(userContext)
//     const childCtx = useContext(childContext)
//     const [isDisabled, setIsDisabled] = useState(false);
//     // useEffect(() => {
//     //     axios.get('https://localhost:44381/User')
//     //         .then(data => { setUsersArr(data.data) })
//     //         .catch(error => { console.log(error) })
//     // }, []);

//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const handleRegistration = (data) => {
//         setIsDisabled(true)
//         console.log("UserCtx.users", userCtx.users)
//         // console.log("UsersArr", usersArr)
//         console.log(userCtx.users[userCtx.users.length - 1])
//         var parent = userCtx.users[userCtx.users.length - 1]
//         console.log("parent", parent)
//         var isExists = childCtx.children.find(p => p.tz === data.tz)
//         if (isExists === undefined) {
//             const obj = {
//                 Name: data.firstName,
//                 TZ: data.tz,
//                 DateOfBirth: data.date,
//                 IdParent1: parent.id
//             }
//             axios.post('https://localhost:44381/Child', obj)
//                 .then(res => console.log(res.data))
//                 .catch(error => console.log(error))
//         }
//         else if (isExists.IdParent1 !== parent.id) {
//             console.log("isExists", isExists)
//             const obj = {
//                 Name: isExists.name,
//                 TZ: isExists.tz,
//                 DateOfBirth: isExists.dateOfBirth,
//                 IdParent1: isExists.idParent1,
//                 IdParent2: parent.id
//             }
//             axios.put(`https://localhost:44381/Child/${isExists.id}`, obj)
//                 .then(res => { console.log(res.data) })
//                 .catch(error => { console.log(error) })
//         }
//     }
//     const styles = {
//         container: {

//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         button: {

//             cursor: 'pointer',
//         },
//         buttonDisabled: {

//             cursor: 'not-allowed',
//         },
//     };
//     return (
//         <div>
//             <form onSubmit={handleSubmit(handleRegistration)} className="d-grid gap-2 col-6 mx-auto" dir="rtl" noValidate>
//                 <div>
//                     <input name="firstName" className="form-control is-invalid" placeholder="שם פרטי" type="text"
//                         {...register('firstName', { required: "שדה חובה" })} />
//                     {errors?.firstName && <p className='invalid-feedback'>{errors.firstName.message}</p>}
//                 </div>
//                 <div>
//                     <input name="tz" className="form-control is-invalid" placeholder="ת.ז." type="text"
//                         {...register('tz', { required: "שדה חובה", minLength: 9 })} />
//                     {errors?.tz?.type === "required" && <p className='invalid-feedback'>{errors.tz.message}</p>}
//                     {errors?.tz?.type === 'minLength' && <p className='invalid-feedback'>אורך מינימלי 9 </p>}
//                 </div>
//                 <div>
//                     <input type="date" name="dateOfBirth" className="form-control is-invalid"
//                         {...register('dateOfBirth', { required: "שדה חובה" })} />
//                     {errors?.dateOfBirth && <p className='invalid-feedback'>{errors.dateOfBirth.message}</p>}
//                 </div>
//                 <div style={styles.container}>
//                     <input type="submit" value="שמירה" disabled={isDisabled}
//                         style={isDisabled ? styles.buttonDisabled : styles.button} />
//                 </div>
//             </form>
//         </div>
//     )
// }

export default function Field({ id }) {

    // const handleFormChange = (id, event) => { 
    //     console.log(inputsCtx.inputs)       
    //     let data = [...inputsCtx.inputs];
    //     console.log(inputsCtx.inputs)
    //     data[id][event.target.name] = event.target.value;
    //     inputsCtx.setInputs(data);
    //     console.log(inputsCtx.inputs)
    // }
    // {event => handleFormChange(id, event)}

    const { register, formState: { errors } } = useForm();

    return (
        <div key={id}>
            <h4>ילד {id + 1}</h4>
            <div className='input-group mb-3'>
                <span className='input-group-text'>שם</span>
                <input name={`Name${id}`} placeholder="שם פרטי" type="text" className="form-control"
                    defaultValue={sessionStorage.getItem(`Name${id}`)}
                    {...register(`Name${id}`, {
                        required: "שדה חובה", onChange: event => { sessionStorage.setItem(`Name${id}`, event.target.value) }
                    })}
                />
            </div >
            <div className='input-group mb-3'>
                <span className='input-group-text'>ת.ז.</span>
                <input name={`TZ${id}`} placeholder="ת.ז." type="text" className="form-control"
                    defaultValue={sessionStorage.getItem(`TZ${id}`)}
                    {...register(`TZ${id}`, {
                        required: "שדה חובה", onChange: event => { sessionStorage.setItem(`TZ${id}`, event.target.value) }
                    })}
                />
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text'>תאריך לידה</span>
                <input name={`DateOfBirth${id}`} type="date" className="form-control"
                    defaultValue={sessionStorage.getItem(`DateOfBirth${id}`)}
                    {...register(`DateOfBirth${id}`, {
                        required: "שדה חובה", onChange: event => { sessionStorage.setItem(`DateOfBirth${id}`, event.target.value) }
                    })}
                />
            </div>
        </div>
    )
}