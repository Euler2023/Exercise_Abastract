---
title: 'Exercise MF12: The Half Integral Weight Theta Multiplier on Gamma Zero Four'
topic: modular-forms
difficulty: advanced
status: not-started
tags:
- exercise
- modular-forms
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §1, Exercise 5, printed pp. 433–434, PDF pp. 452–453
source_refs:
- S4/ch-VII/sec-1/ex-5
created: '2026-10-23'
---

# Exercise MF12: The Half Integral Weight Theta Multiplier on Gamma Zero Four

## Problem Statement

> [!question] Neukirch VII.1.5
> Let $\vartheta(z)=\theta(2z)=\sum_{n\in\mathbb Z}e^{2\pi in^2z}$. Then for all matrices $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ in the group
> $$
> \Gamma_0(4)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)\mid c\equiv0\pmod4\right\}
> $$
> one has the formula
> $$
> \vartheta\!\left(\frac{az+b}{cz+d}\right)=j(\gamma,z)\vartheta(z),\qquad z\in\mathbb H,
> $$
> where
> $$
> j(\gamma,z)=\left(\frac cd\right)\varepsilon_d^{-1}(cz+d)^{1/2}.
> $$
> The Legendre symbol $\left(\frac cd\right)$ and the constant $\varepsilon_d$ are defined by
> $$
> \left(\frac cd\right)=\begin{cases}
> -\left(\frac c{|d|}\right),&c<0,\ d<0,\\
> \left(\frac c{|d|}\right),&\text{otherwise},
> \end{cases}
> \qquad
> \varepsilon_d=\begin{cases}1,&d\equiv1\pmod4,\\i,&d\equiv3\pmod4.\end{cases}
> $$
> Jacobi’s theta function $\vartheta(z)$ is thus an example of a modular form of weight $1/2$ for the group $\Gamma_0(4)$. The representation of $L$-series as Mellin transforms of modular forms, which we have introduced in the case of the Riemann zeta function, is one of the basic and seminal principles of current number-theoretic research (see [106]).

> [!warning] Source issue or convention
> The denominator $d$ is an arbitrary odd integer, so the source’s word “Legendre” requires the Jacobi-symbol convention stated in Notes. The principal square-root branch and $(0/\pm1)=1$ are used throughout; a different branch would change the formula.

## Hints

> [!hint]- Hint 1
> First handle $c>0$. Write $\gamma z=a/c-1/(c(cz+d))$ and split the theta sum into classes modulo $c$.

> [!hint]- Hint 2
> Apply Poisson summation on each class. The finite sum $\sum_{r\bmod c}e^{2\pi i(ar^2+nr)/c}$ vanishes for odd $n$; for $n=2\ell$, complete the square using $ad\equiv1\pmod c$.

> [!hint]- Hint 3
> The remaining constant is a quadratic Gauss sum. Its full value, including its phase, is needed; knowing only its absolute value does not determine the multiplier.

## Solution

> [!success]- Independent derivation
> Write $\Theta(z)=\vartheta(z)$ and use the principal square root, with argument in $(-\pi,\pi]$. For $c\ne0$, $cz+d$ stays in an open half-plane, so this gives a holomorphic branch. When $c=0,d=-1$, take $(-1)^{1/2}=i$. Since $4\mid c$ and $ad-bc=1$, $a,d$ are odd.
>
> **The arithmetic input.** We use the classical quadratic Gauss-sum evaluation, in the following exact form:
> $$
> G(a;c):=\sum_{r\bmod c}e^{2\pi i ar^2/c}
> =(1+i)\sqrt c\,\varepsilon_a^{-1}\left(\frac ca\right)
> \quad(c>0,\ 4\mid c,\ a>0,\ (a,c)=1).
> $$
> This finite arithmetic theorem is an external standard input, independent of the theta transformation being proved; an accessible primary reference is Kane–Pujahari–Yang, *The bias conjecture for elliptic curves over finite fields and Hurwitz class numbers in arithmetic progressions*, Proposition 2.8(4), specialized to the zero linear coefficient. The source and proof boundary are recorded below. Quadratic reciprocity and its supplements imply that $u\mapsto(c/u)$, for fixed positive $4\mid c$, is a quadratic character on $(\mathbb Z/c\mathbb Z)^*$, with the usual even extension to negative odd denominators. One sees its modulus directly by writing $c=4\cdot2^v c_0$ with $c_0$ odd, applying reciprocity to $(c_0/u)$ and the supplement for $(2/u)$. Its value at an inverse therefore equals its value at the element.
>
> **Poisson calculation for $c>0$.** Left multiplication of $\gamma$ by an integer translation changes $a$ to $a+kc$ and leaves $c,d$ unchanged. Since $\Theta(z+1)=\Theta(z)$, choose $k$ so that $a>0$. Put $w=cz+d$. Then
> $$
> \Theta(\gamma z)=\sum_{n\in\mathbb Z}
>  e^{2\pi i an^2/c}e^{-2\pi i n^2/(cw)}.
> $$
> The Gaussian is a Schwartz function on the real line because $\operatorname{Im}w>0$. For a residue $r\bmod c$, Poisson summation and the Gaussian Fourier integral give
> $$
> \sum_{k\in\mathbb Z}e^{-2\pi i(r+kc)^2/(cw)}
> =\left(\frac w{2ic}\right)^{1/2}
> \sum_{n\in\mathbb Z}e^{\pi iwn^2/(2c)}e^{2\pi inr/c}.
> $$
> The Fourier integral is obtained from the real Gaussian formula by holomorphic continuation in its parameter; its branch has positive value when $w$ is positive imaginary. Every series here is absolutely convergent, so regrouping and finite summation are valid. Thus
> $$
> \Theta(\gamma z)=\left(\frac w{2ic}\right)^{1/2}
> \sum_{n\in\mathbb Z}e^{\pi iwn^2/(2c)}S_n,
> \quad S_n=\sum_{r\bmod c}e^{2\pi i(ar^2+nr)/c}.
> $$
> Replace $r$ by $r+c/2$. Since $4\mid c$ and $a$ is odd, the summand changes by $(-1)^n$, so $S_n=0$ for odd $n$. For $n=2\ell$, use $ad\equiv1\pmod c$ to complete the square:
> $$
> ar^2+2\ell r\equiv a(r+d\ell)^2-d\ell^2\pmod c,
> \qquad S_{2\ell}=e^{-2\pi i d\ell^2/c}G(a;c).
> $$
> The two exponential factors now cancel the $d$ term, leaving
> $$
> \Theta(\gamma z)=\left(\frac w{2ic}\right)^{1/2}G(a;c)
> \sum_{\ell\in\mathbb Z}e^{2\pi i z\ell^2}.
> $$
> Insert the finite Gauss-sum value. Since $\sqrt{2i}=1+i$ in the principal branch,
> $$
> \left(\frac w{2ic}\right)^{1/2}G(a;c)
> =\sqrt w\,\varepsilon_a^{-1}\left(\frac ca\right).
> $$
> Because $ad\equiv1\pmod c$, we have $a\equiv d\pmod4$, hence $\varepsilon_a=\varepsilon_d$, and the quadratic-character property gives $(c/a)=(c/d)$. This proves the stated formula for $c>0$ and every odd $d$, including negative $d$ with the printed convention.
>
> **The remaining signs.** If $c<0$, use $-\gamma$, which induces the same fractional linear map and has positive lower-left entry. Its multiplier agrees with the one printed for $\gamma$. Indeed, $w=cz+d$ lies in the lower half-plane and $\sqrt{-w}=i\sqrt w$; substitution into the two cases of the extended symbol gives
> $$
> \left(\frac{-c}{-d}\right)\varepsilon_{-d}^{-1}i
> =\left(\frac cd\right)\varepsilon_d^{-1}.
> $$
> For $d>0$ this follows from $(-1/d)=\varepsilon_d^2$; for $d<0$ the extra minus in the printed definition gives the same equality. Thus the formula holds also for $c<0$. If $c=0$, determinant one gives $a=d=\pm1$, the map is an integer translation, and the displayed multiplier is $1$ with $(0/\pm1)=1$ and the square-root choice already stated.
>
> The series is holomorphic on $\mathbb H$ by locally uniform absolute convergence. To justify the source's modular-form conclusion, for $v>0$ the Gaussian integral bound gives
> $$
> |\Theta(u+iv)|\le1+2\int_0^\infty e^{-2\pi v t^2}dt=1+(2v)^{-1/2}.
> $$
> For any cusp matrix $\sigma=\begin{pmatrix}A&B\\C&D\end{pmatrix}\in SL_2(\mathbb Z)$, $\operatorname{Im}(\sigma z)=\operatorname{Im}z/|Cz+D|^2$. For every fixed finite cusp-width strip $0\le\operatorname{Re}z\le W$, the last estimate shows uniformly that $(Cz+D)^{-1/2}\Theta(\sigma z)$ remains bounded as $\operatorname{Im}z\to\infty$ (also when $C=0$): $|Cz+D|=O(\operatorname{Im}z)$ uniformly in the strip, so the bound is $|Cz+D|^{-1/2}+|Cz+D|^{1/2}/\sqrt{2\operatorname{Im}z}=O(1)$. After a finite multiple of the cusp width the finite-order multiplier becomes periodic, and a bounded holomorphic periodic function has no negative Fourier powers. Hence there are no poles at the cusps. Together with the proved transformation this establishes weight $1/2$ modularity with this multiplier system.
>
> As a phase check, for $\gamma=\begin{pmatrix}1&0\\4&1\end{pmatrix}$ we get $j(\gamma,z)=\sqrt{4z+1}$. For $-I$, $\varepsilon_{-1}^{-1}\sqrt{-1}=(-i)i=1$, as required.

## Related Concepts

- [[07 - Modular Forms/Concepts/Theta Functions|Theta Functions]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms]]
- [[07 - Modular Forms/Concepts/Quadratic Forms and Theta Series|Quadratic Forms and Theta Series]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** Both pages of the full exercise, including the normalization $\vartheta(z)=\theta(2z)$, the extended-symbol signs and the closing explanation, were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §1, Exercise 5, printed pp. 433–434, PDF pp. 452–453]. The book's $\theta(z)=\sum e^{\pi in^2z}$ normalization was checked at [printed p. 422, PDF p. 441]; Poisson summation and its proof at [§3, Proposition (3.2), printed pp. 447–448, PDF pp. 466–467]. The unrelated prime-counting graph on the exercise's first page is not needed and is not retained.
- **External arithmetic input:** The precise quadratic Gauss-sum evaluation used above is [Kane–Pujahari–Yang, Proposition 2.8(4), *Mathematische Annalen* 391 (2025), 6073–6104](https://link.springer.com/article/10.1007/s00208-024-03070-w), at zero linear coefficient. This is a named external standard input, not a claim that Neukirch proves the exercise or the Gauss phase there. The Poisson application, completion of squares, branch bookkeeping and cusp bound are independently derived here. Quadratic reciprocity with the $-1$ and $2$ supplements is also imported.
- **Notation precision:** The source calls the symbol “Legendre”; because $d$ need not be prime it must be read as the Jacobi symbol for positive odd $|d|$, with the printed extension to negative $d$ and denominator $1$. This is a notation clarification, not a replacement of the printed formula. The square-root branch is essential.

- **Independent phase check:** A separate numerical check at $z=0.37+0.81i$ tested $46$ determinant-one matrices, including positive and negative $c,d$ and $c=0,d=\pm1$. Theta sums truncated to $-250\le n\le250$ at $50$ decimal digits gave maximum absolute discrepancy $4.84\times10^{-49}$. This finite check supports branch bookkeeping only; the proof above establishes the identity.
