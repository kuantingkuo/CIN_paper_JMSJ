exp_tag='ctrl_mimic'
name='CTRL'
sels='8'
exps='0.06 0.16 0.29 0.36 0.51 0.66 0.83 0.99 1.17 1.35 1.55 1.76'
cases='-448_000 -448_090 -448_180 -448_270 005_000 005_090 005_180 005_270 448_000 448_090 448_180 448_270'
rc=gsfallow('on')
num=count_num(sels)
'reinit'
'q gxinfo'
path='MODEL_ROOT/SPCAM/GoAmazon_'exp_tag'/'

'set mproj off'
'ini -l'
'set parea 1.2 9.6 1.3 7.75'
j=1
    i=subwrd(sels,j)
    case=subwrd(cases,i)
    'open 'path'SAM_'case'.ctl'
    xmax=qdims('xmax')
    'set x 1'
    'set lev 0 16000'
    z0=qdims('levmin')/1000
    z1=qdims('levmax')/1000
    'set time 00Z 03Z'
    'tvc=tabs*(1+0.608*qv-qcl-qci-qpl-qpi)'
    'tve=mean(tabs*(1+0.608*qv-qcl-qci-qpl-qpi),x=1,x=32)'
    'buo=9.80616*(tvc-tve)/tve'
    'cldc=qcl+qci'

    'on'
    'set grads off'
    'set xlabs 00:00|00:30|01:00|01:30|02:00|02:30|03:00'
    'set yaxis 'z0' 'z1
    'color -levs -0.05 -0.04 -0.03 -0.02 -0.01 -0.005 0.005 0.01 0.02 0.03 0.04 0.05 -kind blue-(5)->white->orange->red'
    'd buo'
    exp=subwrd(exps,i)
    'draw title SPCAM `0'exp
    'draw ylab Height [km]'
    'draw xlab Time'
    'off'
    'set gxout contour'
    'set cthick 3'
    'set clab masked'
    'color -levs -4 -1 -0.25 0.25 1 4 16 -kind black->black -gxout contour'
    'd w'
    'set cthick 5'
    'set rgb 99 30 180 30'
    'set ccolor 99'
    'set clab masked'
    'set clevs 1e-2 1e-1 1 2 3 4'
    'd cldc*1e3'
    'close 1'

'color -levs -0.05 -0.04 -0.03 -0.02 -0.01 -0.005 0.005 0.01 0.02 0.03 0.04 0.05 -kind blue-(5)->white->orange->red'
levs='-0.05 -0.04 -0.03 -0.02 -0.01 -0.005 0.005 0.01 0.02 0.03 0.04 0.05'
nlev=count_num(levs)
cols=range(16,16+nlev)
levcol=subwrd(cols,1)
i=1
while(i<=nlev)
    levcol=levcol' 'subwrd(levs,i)' 'subwrd(cols,i+1)
    i=i+1
endwhile
'xcbar3 9.8 10 1.3 7.75 -fwidth 0.12 -fheight 0.15 -fthickness 3 -levcol 'levcol' -unit [m s`a-2`n]'
'gxprint Fig11b.png white'
'gxprint Fig11b.svg white'
