import axios from 'axios';
import { Form } from 'react-bootstrap'


function App() {

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        console.log(file);

        const formData = new FormData()
        formData.append('image', file)

        // Upload  without converting into string
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
            const { data } = await axios.post('http://localhost:5000/api/upload', formData, config)
            console.log(data);

        } catch (error) {
            console.error(error)
        }

        // Convert image into string format

        /* let reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = async () => {
             // console.log(reader.result)
 
             const config = {
                 headers: {
                     'Content-Type': 'application/json',
                 },
             }
             const { data } = await axios.post('http://localhost:5000/api/upload/base64', { imgStr: reader.result.split(';base64,').pop() }, config)
             console.log(data)
         };
         reader.onerror = function (error) {
             console.log('Error: ', error);
         };
         */

    }

    return (
        <div className="App">
            <p>Hello from DKS G</p>
            <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
            ></Form.File>

        </div>
    );
}

export default App;


// /uploads/image-1620834046681.jpg