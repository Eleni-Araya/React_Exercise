import React, { useEffect, useState } from 'react'
import Songs from '../types/song'
import userService from '../apis/services/login.service'
import { useNavigate } from 'react-router-dom'
import PlayMusic from './playMusic'
import { BsPlayCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";

type Props = {
  playlist: Songs[],
  onRemove: (song: string) => void
}
export default function PlayListComp(props: Props) {

  return (
    <div>
      <h4>Your play List...</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.playlist.map((play, index) => (<tr key={play.id}>
            {/* <td>{play.id}</td> */}
            <td>{index + 1}</td>
            <td>{play.title}</td>
            <td>
              <div style={{ display: 'flex', gap: '50px' }}>

                <BsPlayCircle />
                <FiMinusCircle onClick={() => props.onRemove(play.songId)} />
              </div>
            </td>
          </tr>))}
        </tbody>
      </table>
      <PlayMusic />

    </div>
  )
}
