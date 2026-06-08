* grads -a 2
expname='CTRL'
exp='ACE'
names='0.36 0.66 0.99'
cases='08 12 16'
precinits='123 100 66'
path='MODEL_ROOT/ACE/control13579_enhanced-condensate-loss_supercoolll/'
output_png='Fig6d-f.png'
output_svg='Fig6d-f.svg'
rc=gsfallow('on')
num=count_num(cases)
ncols=7

'reinit'
'ini'
'set mproj off'
'color 1 'ncols-1' 1 -kind (50,150,255)-(1)->blue-(0)->(0,0,0)-(0)->red-(1)->(255,150,50)'
'c'

i=1
while(i<=num)
    'on'
    case=subwrd(cases,i)
    name=subwrd(names,i)
    init=subwrd(precinits,i)

    'open 'path'conv.ctl'
    'set x 1'
    'set y 1'
    'set ens 'case

    dt=5
    v1=-14; v2=14; vint=4
    t=init-15
    nt=1
    while(nt<=ncols)
        'set t 't
        'set z 1 31'
        z0=qdims('levmin')/1000
        'set lev 'z0*1000' 3200'
        z1=qdims('levmax')/1000
        'conv1=(conv(x=1)*0.25+conv(x=2)*2)/2.25'
        'mul 'num' 1 -n 'i
        'set grads off'
        'set yaxis 'z0' 'z1
        'set ylint 1'
        if (nt=1)
            if(i>1)
                'set ylabs |||||||||||||||'
            endif
            'set vrange 'v1' 'v2
            'set xlint 'vint
            'set cmark 0'
            'set cthick 4'
            'set ccolor 15'
            'd const(conv1,0)'
        endif
        'set vrange 'v1' 'v2
        'set xlint 'vint
        'set cmark 0'
        'set cthick 8'
        'set ccolor '%15+nt
        'd conv1*1e3'
        if(nt=1)
            'draw xlab Conv. [`3*`110`a-3`n s`a-1`n]'
            'draw title ACE `0'subwrd(names,i)
            if(i=1)
                'draw ylab Height [km]'
*                cols=range(16,16+ncols-1)
*                strings=range(0,dt*(ncols-1),dt)
*                strings=range(-15,15,dt)
*                'legend bl 'ncols' 'strings' 'cols
            endif
        endif
        'off'
        t=t+dt
        nt=nt+1
    endwhile
    'close 1'
    i=i+1
endwhile
'gxprint 'output_png' white x800 y400'
'gxprint 'output_svg' white'
