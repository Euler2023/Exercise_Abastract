---
title: "Exercise AG85: Riemann Roch Degrees in Odd Weight"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.6, Exercise 3.6.3, printed p. 92, PDF p. 106"
source_refs:
  - "S7/ch-3/sec-6/ex-3"
created: 2026-10-28
---

# Exercise AG85: Riemann Roch Degrees in Odd Weight

## Problem Statement

> [!question] Original Exercise 3.6.3
> (a) Justify the calculation that $\deg(\lfloor\operatorname{div}(f)\rfloor)>2g-2$ if $k\ge3$.
>
> (b) Establish the formula for $\ell(\lfloor\operatorname{div}(f)-\sum_i x_i-\sum_i(1/2)x_i'\rfloor)$ when $k\ge3$.
>
> Throughout, $k$ is odd, $-I\notin\Gamma$, and $0\ne f\in A_k(\Gamma)$. The differential $\omega\in\Omega^{\otimes k}(X(\Gamma))$ pulls back to $f(\tau)^2(d\tau)^k$. Write $x_{3,i}$ for period-three elliptic points, $x_i$ for regular cusps, and $x_i'$ for irregular cusps. The formal divisor is
> $$
> \operatorname{div}(d\tau)=-\tfrac23\sum_i x_{3,i}-\sum_i x_i-\sum_i x_i'.
> $$
>
> Here $g$ is the genus; $\varepsilon_3,r=\varepsilon_\infty^{\mathrm{reg}},t=\varepsilon_\infty^{\mathrm{irr}}$ count the corresponding points. The requested formula in (b) is
> $$
> (k-1)(g-1)+\lfloor k/3\rfloor\varepsilon_3+\tfrac{k-2}{2}r+\tfrac{k-1}{2}t.
> $$

## Hints

> [!hint]- Hint 1
> Use the integral-part divisor from3.6.2 and $\deg\operatorname{div}(\omega)=k(2g-2)$.

> [!hint]- Hint 2
> The positive orbifold quantity is $B=2g-2+2\varepsilon_3/3+r+t$. Subtracting half an irregular cusp does not change its floor.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Set $D=\lfloor\operatorname{div}(f)\rfloor$ and $R=\sum_i x_i$. There are no period-two elliptic points because $-I\notin\Gamma$. At a period-three point the local congruence gives an even $\nu_x(\omega)$ and
> $\lfloor\nu_x(f)\rfloor=\nu_x(\omega)/2+\lfloor k/3\rfloor$. Combining this with Exercise3.6.2 gives
> $$
> D=\tfrac12\operatorname{div}(\omega)+\lfloor k/3\rfloor\sum_i x_{3,i}+\tfrac k2 R+\tfrac{k-1}{2}\sum_i x_i'.
> $$
> The $k$-differential canonical degree is $k(2g-2)$, so
> $$
> \deg D=k(g-1)+\lfloor k/3\rfloor\varepsilon_3+\tfrac k2r+\tfrac{k-1}{2}t.
> $$
> Put $B=2g-2+2\varepsilon_3/3+r+t=d/6>0$, where $d$ is the effective modular index, and $a=\lfloor k/3\rfloor-(k-2)/3\ge0$; the latter inequality follows by considering the three remainders. Direct subtraction gives
> $$
> \deg D-(2g-2)=\tfrac{k-2}{2}B+a\varepsilon_3+r+\tfrac12t>0\qquad(k\ge3).
> $$
> This proves (a), with a strict bound even if there are no regular cusps.
>
> **(b)** At regular cusps the order is integral, so subtraction of one lowers its floor by one. At an irregular cusp its order is a strict half-integer, so subtraction of $1/2$ leaves its floor unchanged. Thus the divisor in (b) is $D-R$. Its degree satisfies
> $$
> \deg(D-R)-(2g-2)=\tfrac{k-2}{2}B+a\varepsilon_3+\tfrac12t>0.
> $$
> Apply the Riemann–Roch formula $\ell(E)=\deg E-g+1$ for integral divisors of degree greater than $2g-2$. Subtracting $r$ from $\deg D$ gives exactly the requested expression. Multiplication by $f$ identifies this space with $S_k(\Gamma)$ because the smallest positive regular and irregular orders are respectively $1$ and $1/2$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 92 / PDF 106. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
