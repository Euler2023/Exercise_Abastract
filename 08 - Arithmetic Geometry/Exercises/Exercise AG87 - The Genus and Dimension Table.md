---
title: "Exercise AG87: The Genus and Dimension Table"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.9, Exercise 3.9.1, printed p. 108, PDF p. 122"
source_refs:
  - "S7/ch-3/sec-9/ex-1"
created: 2026-10-28
---

# Exercise AG87: The Genus and Dimension Table

## Problem Statement

> [!question] Original Exercise 3.9.1
> Verify all the entries in Figure3.4. (A hint for this exercise is at the end of the book.)
>
> Here is a searchable transcription of the figure. In each $\pm$, plus means $\dim M_k$ ($k\ge2$) and minus means $\dim S_k$ ($k\ge3$). Put $H_N=\sum_{d\mid N}\varphi(d)\varphi(N/d)$ and $d_N=[\operatorname{SL}_2(\mathbb Z):\{\pm I\}\Gamma(N)]$.
>
> | Group | Genus | Even $k$: dimensions | Odd $k$: dimensions |
> |---|---|---|---|
> | $\Gamma_1(2)$ | $0$ | $\lfloor k/4\rfloor\pm1$ | $0$ |
> | $\Gamma_1(3)$ | $0$ | $\lfloor k/3\rfloor\pm1$ | $\lfloor k/3\rfloor\pm1$ |
> | $\Gamma_1(4)$ | $0$ | $(k-1\pm3)/2$ | $(k-1\pm2)/2$ |
> | $\Gamma_1(N),N>4$ | $1+d_N/(12N)-H_N/4$ | $(k-1)d_N/(12N)\pm H_N/4$ | same |
> | $\Gamma(2)$ | $0$ | $(k-1\pm3)/2$ | $0$ |
> | $\Gamma(N),N>2$ | $1+d_N(N-6)/(12N)$ | $(k-1)d_N/12\pm d_N/(2N)$ | same |

## Hints

> [!hint]- Hint 1
> Insert the index, elliptic-point and cusp data into the genus and even/odd weight formulas.

> [!hint]- Hint 2
> At $\Gamma_1(4)$ remember that one of the three cusps is irregular.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The needed input data are
>
> | Group | Effective degree $d$ | $\varepsilon_2$ | $\varepsilon_3$ | Cusps; regular/irregular if needed |
> |---|---|---|---|---|
> | $\Gamma_1(2)$ | $3$ | $1$ | $0$ | $2$ |
> | $\Gamma_1(3)$ | $4$ | $0$ | $1$ | $2$ regular |
> | $\Gamma_1(4)$ | $6$ | $0$ | $0$ | $2$ regular, $1$ irregular |
> | $\Gamma_1(N),N>4$ | $d_N/N$ | $0$ | $0$ | $H_N/2$, all regular |
> | $\Gamma(2)$ | $6$ | $0$ | $0$ | $3$ |
> | $\Gamma(N),N>2$ | $d_N$ | $0$ | $0$ | $d_N/N$, all regular |
>
> These follow from the congruence-group index, elliptic and cusp counts. The genus formula $g=1+d/12-\varepsilon_2/4-\varepsilon_3/3-c/2$ gives respectively $0,0,0$, $1+d_N/(12N)-H_N/4$, $0$, and $1+d_N(N-6)/(12N)$, exactly all genus entries.
>
> For even $k$, the modular dimension is
> $$
> (k-1)(g-1)+\lfloor k/4\rfloor\varepsilon_2+\lfloor k/3\rfloor\varepsilon_3+(k/2)c.
> $$
> For $k\ge4$ the cusp dimension subtracts $c$. Substitution for the first three groups gives, before simplification,
> $$
> -(k-1)+\lfloor k/4\rfloor+k,\quad
> -(k-1)+\lfloor k/3\rfloor+k,\quad
> -(k-1)+3k/2.
> $$
> These are the three plus entries; subtracting $2,2,3$ gives the minus entries. For a group without elliptic points, $g-1=d/12-c/2$, so the same calculation simplifies to $(k-1)d/12+c/2$ and $(k-1)d/12-c/2$. This proves the remaining even columns, using $d=d_N/N,c=H_N/2$ for $\Gamma_1(N)$ and $d=d_N,c=d_N/N$ for $\Gamma(N)$.
>
> For odd $k$, the groups $\Gamma_1(2)$ and $\Gamma(2)$ contain $-I$ and hence have zero spaces. Otherwise use the odd formula with regular count $r$ and irregular count $t$:
> $$
> \dim M_k=(k-1)(g-1)+\lfloor k/3\rfloor\varepsilon_3+kr/2+(k-1)t/2,
> \qquad \dim S_k=\dim M_k-r.
> $$
> For $\Gamma_1(3)$ this is $-(k-1)+\lfloor k/3\rfloor+k=\lfloor k/3\rfloor+1$ and subtracting two gives the minus entry. For $\Gamma_1(4)$ it is $-(k-1)+k+(k-1)/2=(k+1)/2$, and subtracting two gives $(k-3)/2$. For the two general families, $t=0$ and $\varepsilon_3=0$, so simplification is the same as in even weight. This verifies every odd entry for the asserted range $k\ge3$.
>
> The table deliberately excludes $S_2$, which has dimension $g$ rather than its displayed minus expression; it also excludes weight one. These range conditions are essential.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 108 / PDF 122. The solution above is independently derived.
- **Source figure:** Figure3.4, printed p.108 / PDF122, is a formula table transcribed above; no text-only screenshot is retained.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
