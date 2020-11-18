import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from '@reach/router'

export default function DashboardSelector({ axios }) {
  // const [dashboardList, setDashboardList] = useState(undefined)
  const dashboardList = useSelector(({DashboardReducer}) => DashboardReducer.dashboardList)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`/api/dashboard-list`)
      .then(({data}) => {
        // setDashboardList(data)
        
        dispatch({
          type: 'SET_DASHBOARD_LIST',
          payload: data
        })
      })
      // eslint-disable-next-line
  }, [])

  return (
    <section className="dashboard-selector">
      {
        dashboardList && dashboardList.map(dashboard => (
          <Link className="dashboard-card" to={dashboard.path} key={dashboard.path}>
            <h3 className="dashboard-title">{dashboard.title}</h3>
            <p className="dashboard-description">{dashboard.description}</p>
          </Link>
        ))
      }
    </section>
  )
}
