---
title: "Exercise G365: Small Level Groups and Their Modular Dimensions"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.9, Exercise 3.9.3, printed p. 108, PDF p. 122"
source_refs:
  - "S7/ch-3/sec-9/ex-3"
created: 2026-10-28
---

# Exercise G365: Small Level Groups and Their Modular Dimensions

## Problem Statement

> [!question] Original Exercise 3.9.3
> Show that $\Gamma_0(N)=\{\pm I\}\Gamma_1(N)$ for $N=2,3,4$. What does this show about $\dim M_k(\Gamma_0(N))$ and $\dim S_k(\Gamma_0(N))$ for these values of $N$? As a special case of this, note $\dim M_2(\Gamma_0(4))=2$, cited in the four-squares problem in Section1.2.

## Hints

> [!hint]- Hint 1
> For these three moduli the unit group consists entirely of $\pm1$.

> [!hint]- Hint 2
> For even weight adjoining $-I$ changes no invariance condition; for odd weight it forces zero.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> If $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_0(N)$, then $ad\equiv1\pmod N$, so $a$ is a unit and $d\equiv a^{-1}$. For $N=2,3,4$, each unit is $1$ or $-1$ and equals its own inverse. Choose the common sign so that $\pm a\equiv\pm d\equiv1$; then $\pm\gamma\in\Gamma_1(N)$. This proves the claimed equality, since the reverse inclusion holds for every $N$.
>
> When $k$ is even, $f[-I]_k=f$ automatically. Thus the modular and cusp spaces for these two groups are equal, not merely isomorphic, and the even columns of Figure3.4 apply to $\Gamma_0(N)$. Explicitly for even $k\ge2$ the modular dimensions are
> $$
> \lfloor k/4\rfloor+1\ (N=2),\qquad
> \lfloor k/3\rfloor+1\ (N=3),\qquad
> (k+2)/2\ (N=4).
> $$
> For even $k\ge4$ the cusp dimensions are respectively $\lfloor k/4\rfloor-1$, $\lfloor k/3\rfloor-1$, and $(k-4)/2$. For $k=2$ all three cusp dimensions are their genus, zero. Weight zero gives modular dimension one and cusp dimension zero; negative weights vanish. For odd $k$, both spaces for $\Gamma_0(N)$ are zero because $-I$ belongs to it, even when the corresponding $\Gamma_1(N)$ spaces can be nonzero. In particular, the $N=4$, $k=2$ modular formula gives $(2+2)/2=2$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 108 / PDF 122. The solution above is independently derived.
- **Routing:** The principal toolkit is group-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
