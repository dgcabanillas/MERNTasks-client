import React from 'react';
//import SyntaxHighlighter  from 'react-syntax-highlighter';
//import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneSpace } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { materialDark as styly } from 'react-syntax-highlighter/dist/esm/styles/prism';
/*
okaidia 10
tomorrow 5
materialDark 9
materialOceanic 9
vscDarkPlus 9
*/

const Component = () => {
    const codeString = `#include "stdio.h"

int main()
{
    int i, j;
    int tabla[10][9] = {{0, 0, 0, 0, 0, 0, 0, 0, 0 },
                        {0, 0, 0, 1, 1, 1, 0, 0, 0 },
                        {0, 0, 1, 0, 0, 0, 1, 0, 0 },
                        {0, 1, 0, 0, 0, 0, 0, 1, 0 },
                        {0, 1, 0, 0, 0, 0, 0, 1, 0 },
                        {0, 1, 1, 1, 1, 1, 1, 1, 0 },
                        {0, 1, 0, 0, 0, 0, 0, 1, 0 },
                        {0, 1, 0, 0, 0, 0, 0, 1, 0 },
                        {0, 1, 1, 0, 0, 0, 0, 1, 0 },
                        {0, 0, 0, 0, 0, 0, 0, 0, 0 }};
                        
    printf("La matriz original es:\\n");
    for( i=0; i<10; i++ )
    {
        for( j=0; j<9; j++ )
        {
            if( tabla[i][j] == 1 ) printf("%c", 219);
            else printf(" ");
        }
        printf("\\n");
    }
    
    printf("\\n\\nLa matriz rotada a la izquierda es:\\n");
    for( j=0; j<9; j++ )
    {
        for( i=0; i<10; i++ )
        {
            if( tabla[i][8-j] == 1 ) printf("%c", 219);
            else printf(" ");
        }
        printf("\\n");
    }
    
    printf("\\n\\nLa matriz rotada a la derecha es:\\n");
    for( j=0; j<9; j++ )
    {
        for( i=0; i<10; i++ )
        {
            if( tabla[9-i][j] == 1 ) printf("%c", 219);
            else printf(" ");
        }
        printf("\\n");
    }
}`;
    
    return (
        <SyntaxHighlighter language="cpp" style={ styly } showLineNumbers={true}>
            { codeString }
        </SyntaxHighlighter>
    );
};

export default Component;