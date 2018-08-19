import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class CreatePikka extends Component {
  fileName = React.createRef()
  state = {
    caption: '',
    isAuth: false
  }

  submitHandler = async e => {
    
    e.preventDefault()
  
    const formData = new FormData()
    const picture = this.fileName.current.files[0]

    formData.append('caption', this.state.caption)
    formData.append('picture', picture)
    const res = await fetch('http://guver.net/api/v1/pikka', {
      method: 'post',
      body: formData,
      credentials: 'include'
    })
    console.log(res.status)
    if(res.statusText === 'OK') {
      this.setState({isAuth: true})
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {caption, isAuth} = this.state
    
    return (
      <div>
        {isAuth && <Redirect to='/' />}
        <form onSubmit={this.submitHandler}>
          <input ref={this.fileName} type="file" name="pictuer" style={{display: 'block'}} id="picture"/>
          <textarea onChange={this.handleChange} name="caption" value={caption} cols="30" rows="5" style={{display: 'block'}}></textarea>
          <button style={{display: 'block'}}>Create</button>
        </form>
      </div>
    )
  }
}

export default CreatePikka