---
title: "Exercise MF70: Dimensions of Eisenstein Quotients"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.1, Exercise 4.1.2, printed p. 111, PDF p. 125"
source_refs:
  - "S7/ch-4/sec-1/ex-2"
created: 2026-10-28
---

# Exercise MF70: Dimensions of Eisenstein Quotients

## Problem Statement

> [!question] Original Exercise 4.1.2
> Confirm formula (4.3).
>
> For $E_k(\Gamma)=M_k(\Gamma)/S_k(\Gamma)$, the formula is
> $$
> \dim E_k(\Gamma)=\begin{cases}
> \varepsilon_\infty,&k\ge4\text{ even},\\
> \varepsilon_\infty^{\mathrm{reg}},&k\ge3\text{ odd},\ -I\notin\Gamma,\\
> \varepsilon_\infty-1,&k=2,\\
> \varepsilon_\infty^{\mathrm{reg}}/2,&k=1,\ -I\notin\Gamma,\\
> 1,&k=0,\\
> 0,&k<0\text{ or }k>0\text{ odd and }-I\in\Gamma.
> \end{cases}
> $$
> Here $\varepsilon_\infty$ is the number of cusps, and $\varepsilon_\infty^{\mathrm{reg}}$ is the number of regular cusps of the compact modular curve.

## Hints

> [!hint]- Hint 1
> The dimension of a finite-dimensional quotient is the difference of dimensions.

> [!hint]- Hint 2
> Subtract the Chapter 3 formulas, treating weights $0,1,2$ separately.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Since $S_k(\Gamma)\subset M_k(\Gamma)$, $\dim E_k=\dim M_k-\dim S_k$. Use Theorem 3.5.1 for even weight [printed pp.87–88/PDF pp.101–102]. For even $k\ge4$ both dimensions have the same terms $(k-1)(g-1)+\lfloor k/4\rfloor\varepsilon_2+\lfloor k/3\rfloor\varepsilon_3$, while their cusp terms are respectively $k\varepsilon_\infty/2$ and $(k/2-1)\varepsilon_\infty$. Their difference is $\varepsilon_\infty$.
>
> At $k=2$, the same theorem gives $\dim M_2=g-1+\varepsilon_\infty$ and $\dim S_2=g$, so the difference is $\varepsilon_\infty-1$. At weight zero the modular functions holomorphic on the compact curve are constant, so $\dim M_0=1$; a constant cusp form must vanish, so $S_0=0$. For negative even weights both spaces vanish.
>
> For odd $k$ and $-I\in\Gamma$, the transformation law gives $f=f[-I]_k=(-1)^kf=-f$, so both spaces vanish. If $-I\notin\Gamma$ and odd $k\ge3$, Theorem 3.6.1 [printed p.91/PDF p.105] gives common genus, elliptic, and irregular-cusp terms. The regular-cusp terms are $k\varepsilon_\infty^{\mathrm{reg}}/2$ in $M_k$ and $(k-2)\varepsilon_\infty^{\mathrm{reg}}/2$ in $S_k$. Their difference is $\varepsilon_\infty^{\mathrm{reg}}$. The same theorem's weight-one clause, in either of its cases, says $\dim M_1-\dim S_1=\varepsilon_\infty^{\mathrm{reg}}/2$. Finally both spaces vanish in negative odd weight. These exhaust all integers $k$ and give exactly (4.3).

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.1.2, printed p. 111 / PDF p. 125]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Proof inputs:** The Chapter 3 dimension theorems are imported and explicitly subtracted here. Their Riemann–Roch derivations are not being reproved by this quotient calculation. The special weight-one difference does not assert that $S_1$ vanishes in every case.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
