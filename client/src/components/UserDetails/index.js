import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import CanvasJSReact from './canvasjs.react';
import { getUsersStatistic, getUsers } from '../../store';
import { UserStatsNavigation } from '../';
import './style.scss';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const mapStateToProps = (state) => ({
    usersStatisticList: state.users.usersStatisticList,
    usersList: state.users.usersList,
});

const actionCreator = {
    getUsersStatistic,
    getUsers,
};

export const UserDetails = connect(
    mapStateToProps,
    actionCreator,
)((props) => {
    const { usersStatisticList, getUsersStatistic, getUsers, usersList } = props;
    const { id } = useParams();

    useEffect(() => {
        getUsersStatistic();
        getUsers();
    }, [getUsersStatistic, getUsers]);

    const fileterUserDate = usersStatisticList
        .filter((item) => item.user_id === id)
        .map((item) => ({ date: item.date, clicks: item.clicks, page_views: item.page_views }))
        .sort((a, b) => a.date - b.date);

    const filterByWeek = fileterUserDate;

    const WeeksArray = [];
    const sortData = (array) => {
        const arrayLength = array.length;
        const week = [];
        let slicedArray;

        if (!arrayLength) {
            return false;
        } else {
            let nextDate;
            array.every((item, index) => {
                const curDate = new Date(item.date);
                const curDayOfWeek = curDate.getDay();
                const curDayOfMonth = curDate.getDate();

                if (array[index + 1]) {
                    nextDate = new Date(array[index + 1].date);
                } else {
                    // next date become previous
                    nextDate = new Date(array[index - 1].date);
                }
                const nextDayOfWeek = nextDate.getDay();
                const nextDayofMonth = nextDate.getDate();

                if (curDayOfWeek < nextDayOfWeek && curDayOfMonth < nextDayofMonth) {
                    week.push(item);
                } else if (curDayOfWeek > nextDate && arrayLength === index) {
                    week.push(item);
                    WeeksArray.push(week);
                    return false;
                } else {
                    week.push(item);
                    WeeksArray.push(week);
                    slicedArray = array.slice(index + 1);
                    return false;
                }
                return true;
            });
        }
        sortData(slicedArray);
    };
    sortData(filterByWeek);

    const generateGraphicDataClicks = (array) => {
        const graphicArray = [];
        array.forEach((item) => {
            const clicks = item.map((elem) => Number(elem.clicks)).reduce((prev, cur) => prev + cur);
            const lastDate = item[item.length - 1].date;
            const graphObject = { x: new Date(lastDate), y: clicks };
            graphicArray.push(graphObject);
        });
        return graphicArray;
    };

    const generateGraphicDataPageView = (array) => {
        const graphicArray = [];
        array.forEach((item) => {
            const pageViews = item.map((elem) => Number(elem.page_views)).reduce((prev, cur) => prev + cur);
            const lastDate = item[item.length - 1].date;
            const graphObject = { x: new Date(lastDate), y: pageViews };
            graphicArray.push(graphObject);
        });
        return graphicArray;
    };

    const userClickGraphic = generateGraphicDataClicks(WeeksArray);
    const userPageViewGraphic = generateGraphicDataPageView(WeeksArray);

    const optionsClicks = {
        animationEnabled: true,
        theme: 'light2',
        title: {
            fontSize: 24,
            fontColor: '#1A1A1A',
            horizontalAlign: 'left',
            text: 'Clicks',
        },
        axisX: {
            labelFontColor: '#CCCCCC',
            gridColor: '#CCCCCC',
            valueFormatString: 'MMM/DD',
        },
        axisY: {
            labelFontColor: '#CCCCCC',
            includeZero: true,
            valueFormatString: '#',
        },

        data: [
            {
                yValueFormatString: '###',
                xValueFormatString: 'MMM/DDD/D',
                type: 'spline',
                dataPoints: [...userClickGraphic],
            },
        ],
    };

    const optionsPageViews = {
        animationEnabled: true,
        theme: 'light2',
        title: {
            fontSize: 24,
            fontColor: '#1A1A1A',
            horizontalAlign: 'left',
            text: 'Views',
        },
        axisX: {
            labelFontColor: '#CCCCCC',
            gridColor: '#CCCCCC',
            valueFormatString: 'MMM/DD',
        },
        axisY: {
            labelFontColor: '#CCCCCC',
            includeZero: true,
            valueFormatString: '#',
        },

        data: [
            {
                yValueFormatString: '###',
                xValueFormatString: 'MMM/DDD/D',
                type: 'spline',
                dataPoints: [...userPageViewGraphic],
            },
        ],
    };
    const user = usersList.find((item) => item.id === id);

    return (
        <div className="container">
            <div className="users-wrapper">
                <UserStatsNavigation name={user ? user.first_name : null} />
                <h1 className="user-name">{user ? user.first_name : null}</h1>
                <div className="custom-margin">
                    <CanvasJSChart options={optionsClicks} />
                </div>
                <div className="custom-margin">
                    <CanvasJSChart options={optionsPageViews} />
                </div>
            </div>
        </div>
    );
});
