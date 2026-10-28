---
title: "Exercise MF49: Meromorphic Torsion Coordinates at the Cusps"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.5, Exercise 7.5.1, printed p. 289, PDF p. 302"
source_refs:
  - "S7/ch-7/sec-5/ex-1"
created: 2026-10-28
---

# Exercise MF49: Meromorphic Torsion Coordinates at the Cusps

## Problem Statement

> [!question] Original Exercise 7.5.1
> (a) Show that $f_0^v$ is meromorphic on $\mathcal H$.
>
> (b) Show that $f_0^v\circ\gamma=f_0^{v\gamma}$ for all $\gamma\in\mathrm{SL}_2(\mathbb Z)$.
>
> (c) Show that $f_0^v$ is meromorphic at $\infty$. More specifically, show that, for $v=(c_v,d_v)$ as in the section,
> $$
> \lim_{\operatorname{Im}\tau\to\infty}\wp_\tau\left(\frac{c_v\tau+d_v}{N}\right)=
> \begin{cases}
> -2\zeta(2),&c_v\not\equiv0\pmod N,\\
> -2\zeta(2)+N^2\displaystyle\sum_{n\equiv d_v\ (N)}\frac1{n^2},&c_v\equiv0\pmod N.
> \end{cases}
> $$
> (A hint for this exercise is at the end of the book.)
>
> (d) Explain why showing that each $f_0^v$ is meromorphic at $\infty$ checks the other cusps as well.

> **Context and notation.** Here $N>1$, $v\in(\mathbb Z/N\mathbb Z)^2\setminus\{0\}$, $\Lambda_\tau=\mathbb Z\tau+\mathbb Z$, and $f_0^v=(g_2/g_3)\wp_\tau((c_v\tau+d_v)/N)$. The row vector $v\gamma$ is reduced modulo $N$. The source hint suggests separating the rows in the lattice sum.

## Hints

> [!hint]- Hint 1
> Use normal convergence of the lattice series, and the scaling law for $\wp$ under a lattice homothety.

> [!hint]- Hint 2
> Group lattice points by their $\tau$ coefficient. The resulting $\csc^2$ terms decay exponentially off the real row.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Write $z_v=(c_v\tau+d_v)/N$, choosing $0\le c_v<N$ and, when $c_v=0$, $d_v\not\equiv0\pmod N$. Changing representatives does not change $\wp_\tau(z_v)$.
>
> (a) The normally convergent lattice expansion of $\wp$ is holomorphic jointly in $(\tau,z)$ away from $z\in\Lambda_\tau$. The equality $z_v\in\Lambda_\tau$ would imply $(c_v-Na)\tau+(d_v-Nb)=0$ for integers $a,b$, hence $v=0$ modulo $N$. This is excluded. Thus $\wp_\tau(z_v)$ is holomorphic on $\mathcal H$. The modular functions $g_2,g_3$ are holomorphic and $g_3$ is not identically zero, so their quotient times this function is meromorphic.
>
> (b) Put $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$. The lattice identity $\Lambda_{\gamma\tau}=(c\tau+d)^{-1}\Lambda_\tau$ and homogeneity give
> $$
> \wp_{\gamma\tau}(z)=(c\tau+d)^2\wp_\tau((c\tau+d)z).
> $$
> Furthermore $g_2(\gamma\tau)/g_3(\gamma\tau)=(c\tau+d)^{-2}g_2(\tau)/g_3(\tau)$, while $(c\tau+d)z_v(\gamma\tau)=z_{v\gamma}(\tau)$. Multiplication cancels the two factors, proving the identity.
>
> (c) Group the normally convergent lattice expansion into horizontal rows. The partial-fraction identity $\sum_{n\in\mathbb Z}(z-n)^{-2}=\pi^2\csc^2(\pi z)$ yields
> $$
> \wp_\tau(z)=\pi^2\csc^2(\pi z)-\frac{\pi^2}{3}
> +\pi^2\sum_{m\ne0}\bigl(\csc^2\pi(z-m\tau)-\csc^2\pi m\tau\bigr).
> $$
> For $r=c_v/N\in(0,1)$ and $s=d_v/N$, the imaginary parts of $(r-m)\tau+s$ have absolute values $|r-m|\operatorname{Im}\tau$. The bound $|\csc^2\pi(u+iw)|\le C e^{-2\pi|w|}$ for $|w|\ge1$ makes the sum bounded by convergent geometric series tending uniformly to zero as $\operatorname{Im}\tau\to\infty$. Its $m=0$ term also tends to zero. The limit is consequently $-\pi^2/3=-2\zeta(2)$. If $r=0$, the $m\ne0$ terms again tend uniformly to zero and the remaining term is
> $$
> -2\zeta(2)+\pi^2\csc^2(\pi d_v/N)
> =-2\zeta(2)+N^2\sum_{n\equiv d_v\ (N)}n^{-2}.
> $$
> The convergence is uniform in the real part of $\tau$ modulo $N$. Also $g_2/g_3\to9/(2\pi^2)$ because $g_2\to120\zeta(4)$ and $g_3\to280\zeta(6)$. Part (b) makes $f_0^v$ periodic under $\tau\mapsto\tau+N$. For sufficiently large imaginary part it is holomorphic and bounded, so it defines a bounded holomorphic function in $q_N=e^{2\pi i\tau/N}$ on a punctured disk. The removable singularity theorem extends it to $q_N=0$. In particular it is meromorphic there; existence of a radial limit alone would not have sufficed.
>
> (d) Every cusp is $\gamma\infty$ for some $\gamma\in\mathrm{SL}_2(\mathbb Z)$. Its cusp expansion is the expansion at infinity of $f_0^v\circ\gamma=f_0^{v\gamma}$; $v\gamma$ remains nonzero. Thus (c) checks all cusps.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Modular Curves and Moduli|Modular Curves and Moduli]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 289 / PDF p. 302. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Analytic inputs:** Normal convergence of the Weierstrass series, the sine partial-fraction identity, and the removable singularity theorem are used explicitly.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
