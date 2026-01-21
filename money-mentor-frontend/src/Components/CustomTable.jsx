import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

function CustomTable(props) {
  return (
    <TableContainer 
      component={Paper} 
      elevation={1}
      className={''}
      sx={{ maxHeight: props.maxHeight, backgroundColor: 'background.teriary', borderColor:'background.primary'  }}
    >
      <Table stickyHeader={false}>
        <TableHead>
          <TableRow>
            {props.headers.map((header, index) => (
              <TableCell 
                key={index}
                sx={{ 
                  fontWeight: 'bold',
                  fontSize:20 
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody >
          {(props.data).map((row, rowIndex) => (
            <TableRow 
              key={rowIndex}
              sx={{ '&:hover': { backgroundColor: 'background.secondary'}}}
            >
              {row.map((cell, cellIndex) => (
                <TableCell sx={{fontSize:20 }} key={cellIndex}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;