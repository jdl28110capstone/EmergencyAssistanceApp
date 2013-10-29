/**
 * Created by Jdl28110 on 10/14/13.
 */

function Position(position, datetime, country, area, state, mobile)
{
    var _db = window.sessionStorage;
    var MAX_POSITIONS = 6;

    this.position = position;
    this.datetime = datetime;
    this.country = country;
    this.area = area;
    this.state= state;
    this.mobile= mobile;

    this.getMaxPositions = function()
    {
        return MAX_POSITIONS;
    }



    this.savePosition = function(position, country, area, state, mobile)
    {
        if (!_db)
        {
            console.log('Unable to save position');
            navigator.notification.alert(
                'Unable to save position',
                function(){},
                'Error'
            );
        }

        var positions = this.getPositions();
        if (positions == null)
            positions = [];

        positions.unshift(new Position(position, new Date(), country, area, state, mobile));
        // Only the top MAX_POSITIONS results are needed
        if (positions.length > this.MAX_POSITIONS)
            positions = positions.slice(0, this.MAX_POSITIONS);

        _db.setItem('positions', JSON.stringify(positions));

        return positions;
    }

    this.updatePosition = function(index, position, country, area, state, mobile)
    {
        if (!_db)
        {
            console.log('The database is null. Unable to update position');
            navigator.notification.alert(
                'Unable to update position',
                function(){},
                'Error'
            );
        }

        var positions = this.getPositions();
        if (positions != null && positions[index] != undefined)
        {
            positions[index].coords = position;
            positions[index].country = country;
            positions[index].area = area;
            positions[index].state = state;
            positions[index].mobile = mobile;

        }

        _db.setItem('positions', JSON.stringify(positions));

        return positions;
    }

    this.getPositions = function()
    {
        if (!_db)
        {
            console.log('The database is null. Unable to retrieve positions');
            navigator.notification.alert(
                'Unable to retrieve positions',
                function(){},
                'Error'
            );
        }

        var positions = JSON.parse(_db.getItem('positions'));
        if (positions == null)
            positions = [];

        return positions;
    }

}

function Coords(latitude, longitude, accuracy)
{
    this.latitude = latitude;
    this.longitude = longitude;
    this.accuracy = accuracy;
}