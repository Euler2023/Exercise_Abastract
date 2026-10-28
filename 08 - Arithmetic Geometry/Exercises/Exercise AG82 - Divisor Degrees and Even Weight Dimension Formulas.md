---
title: "Exercise AG82: Divisor Degrees and Even Weight Dimension Formulas"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.5, Exercise 3.5.2, printed p. 88, PDF p. 102"
source_refs:
  - "S7/ch-3/sec-5/ex-2"
created: 2026-10-28
---

# Exercise AG82: Divisor Degrees and Even Weight Dimension Formulas

## Problem Statement

> [!question] Original Exercise 3.5.2
> (a) Prove formula (3.10).
>
> (b) Prove formula (3.11).
>
> (c) Prove that for $k\ge2$ even, $\lfloor k/4\rfloor\ge(k-2)/4$ and $\lfloor k/3\rfloor\ge(k-2)/3$.
>
> (d) Prove formula (3.12). Where does the condition $k\ge4$ arise?
>
> In the section, $\Gamma$ is a congruence subgroup, $k\ge2$ is even, $0\ne f\in A_k(\Gamma)$, and $\omega\in\Omega^{\otimes k/2}(X(\Gamma))$ pulls back to $f(\tau)(d\tau)^{k/2}$. If $x_{2,i},x_{3,i},x_i$ are respectively the elliptic points of periods two and three and the cusps, define
> $$
> \operatorname{div}(d\tau)=-\tfrac12\sum_i x_{2,i}-\tfrac23\sum_i x_{3,i}-\sum_i x_i.
> $$
> The referenced formulas are
> $$
> \operatorname{div}(\omega)=\operatorname{div}(f)+(k/2)\operatorname{div}(d\tau),\tag{3.10}
> $$
> $$
> \lfloor\operatorname{div}(f)\rfloor=\operatorname{div}(\omega)+\lfloor k/4\rfloor\sum_i x_{2,i}+\lfloor k/3\rfloor\sum_i x_{3,i}+(k/2)\sum_i x_i,\tag{3.11}
> $$
> $$
> \dim S_k(\Gamma)=\ell\bigl(\lfloor\operatorname{div}(f)-\sum_i x_i\rfloor\bigr)=\ell(\lfloor\operatorname{div}(f)\rfloor)-\varepsilon_\infty\quad(k\ge4).\tag{3.12}
> $$

## Hints

> [!hint]- Hint 1
> At an elliptic point of period $h$, the differential order is $\nu_x(f)-(k/2)(1-1/h)$; at a cusp it is $\nu_x(f)-k/2$.

> [!hint]- Hint 2
> After subtracting the cusp divisor, prove the degree still exceeds $2g-2$ before applying Riemann–Roch.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $n=k/2$, $C=\sum x_i$, $D=\lfloor\operatorname{div}(f)\rfloor$, and let $g$ be the genus. The local differential calculation gives
> $$
> \nu_x(\omega)=\nu_x(f)-n(1-1/h)
> $$
> at an elliptic point of period $h$, equality of orders at ordinary interior points, and $\nu_x(\omega)=\nu_x(f)-n$ at cusps. These are precisely the coefficients of (3.10), proving (a).
>
> **(b)** Solve (3.10) for $\operatorname{div}(f)$. The divisor of $\omega$ is integral, and $n$ is integral; taking each coefficient's floor therefore gives (3.11).
>
> **(c)** For even $k$, its remainder modulo four is zero or two, so $\lfloor k/4\rfloor=k/4$ or $(k-2)/4$. Its remainder modulo three is zero, one or two, so $\lfloor k/3\rfloor=(k-r)/3\ge(k-2)/3$.
>
> **(d)** Multiplication by $f$ identifies $M_k$ with $L(D)$. Since cusp orders of even-weight forms are integral, vanishing at all cusps identifies $S_k$ with $L(D-C)$. The canonical degree formula gives $\deg\operatorname{div}(\omega)=k(g-1)$. Set
> $$
> B=2g-2+\varepsilon_2/2+2\varepsilon_3/3+\varepsilon_\infty=d/6>0,
> $$
> where $d=[\operatorname{SL}_2(\mathbb Z):\{\pm I\}\Gamma]$ and the equality is the modular genus formula. Part (c) implies
> $$
> \deg D\ge 2g-2+\tfrac{k-2}{2}B+\varepsilon_\infty.
> $$
> Thus $\deg D>2g-2$ for $k\ge2$ because there is a cusp. Also
> $$
> \deg(D-C)\ge2g-2+\tfrac{k-2}{2}B>2g-2
> $$
> when $k\ge4$. Riemann–Roch's nonspecial-divisor formula $\ell(E)=\deg E-g+1$ now applies to both divisors, and their dimensions differ by $\deg C=\varepsilon_\infty$. This proves (3.12). The strict inequality for $D-C$ is exactly where $k\ge4$ is used. At $k=2$, $D-C$ is canonical; its dimension is $g$, while $\ell(D)-\varepsilon_\infty=g-1$, so the displayed subtraction formula would fail.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 88 / PDF 102. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
