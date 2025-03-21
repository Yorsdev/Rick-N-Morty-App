import {React, useEffect } from 'react'
import { useFetchApi } from '../hooks/useFetchApi'
import './residentcard.css'

function ResidentCard({ url }) {
  const { data: resident, request, loading } = useFetchApi()

  useEffect(() => {
    request(url)
  }, [url])

  if(loading) return <p>Cargando...</p>
  
  const episodes = resident?.episode?.length || 1

  const statusColors = {
    Alive: '#55cc44',
    Dead: '#d63d2e',
    unknown: '#9e9e9e',
  };

  return (
    resident && (
      <div className="resident-card">
        <div className="resident__header"> 
          <img className="resident__img" src={resident.image} alt={resident.name} />

          <div className="resident__status">
              {resident.status}
            <span className="status-dot" style={{ backgroundColor: statusColors[resident.status] }}>
              </span>
              
          </div>

        </div>
          <div className="resident__body">
          <h2 className="resident__name">{resident.name}</h2>
          <ul className="resident__info">
            <li className="resident__item"><span className="resident__span">Specie: </span> {resident.species} </li>
            <li className="resident__item"><span className="resident__span">Origin: </span> {resident.origin.name} </li>
            <li className="resident__item"><span className="resident__span">Episodes: </span> {episodes}
            {episodes == 1 ? ' episode' : ' episodes'} </li>
            </ul>

        </div>
        
      </div>
    )
  );
}

export default ResidentCard
