_tags='dummy dummy ctrl_mimic'
_exp_cap='CTRL'
_sels='1 3 4 5 6 7 8 9 10 11'
_exps='0.06 0.16 0.29 0.36 0.51 0.66 0.83 0.99 1.17 1.35 1.55 1.76'
_v1=0
_v2=36
_vint=4
rc=gsfallow('on')
_num=count_num(_sels)
say _num
'color 2 '_num' 1 -kind dark_jet'
_colors=range(16,_num+16-1)
'q gxinfo'
line=sublin(result,2)
xpage=subwrd(line,4)-0.00001
ypage=subwrd(line,6)
'reinit'
'set mproj off'
'ini -l'
'on'
rc=draw_SAM()

lint=0.5
yinit=7
x0=2.5
'set strsiz 0.20 0.24'
len=0.67
'set string 1 l'
colors=range(16,16+_num-1)
i=1
while(i<=_num)
    j=subwrd(_sels,i)
    exp=subwrd(_exps,j)
    y0=yinit-(i-1)*lint
    'draw string 'x0-0.8' 'y0' 'exp
    color=subwrd(colors,i)
    'set line 'color' 1 7'
    'draw line 'x0' 'y0' 'x0+len' 'y0
    i=i+1
endwhile
'gxprint Fig11a.png white'
'gxprint Fig11a.svg white'

function draw_SAM()
tag=subwrd(_tags,3)
pattern='MODEL_ROOT/SPCAM/GoAmazon_'tag'/SAM_precpermin_'
cases='-448_000 -448_090 -448_180 -448_270 005_000 005_090 005_180 005_270 448_000 448_090 448_180 448_270'
i=1
while(i<=_num)
    j=subwrd(_sels,i)
    case=subwrd(cases,j)
    ctl=pattern%case'.ctl'
    'open 'ctl
    'set x 1'
    'set z 1'
    'set time 00Z 03Z'
    'set grads off'
    'set xlabs 0||1||2||3'
    color=subwrd(_colors,i)
    'set ccolor 'color
    'set cmark 0'
    'set cthick 7'
    'set vrange '_v1' '_v2
    'set yaxis '_v1' '_v2' '_vint
    'd prec*60'
    if i=1 
        'draw xlab Time [h]'
        'draw ylab Precip. Rate [mm h`a-1`n]'
        'draw title SPCAM '_exp_cap
        'off'
    endif
    say subwrd(_exps,j)
    'd max(prec*60,time=00z,time=03z)'
    say result
    'close 1'
    i=i+1
endwhile
return
