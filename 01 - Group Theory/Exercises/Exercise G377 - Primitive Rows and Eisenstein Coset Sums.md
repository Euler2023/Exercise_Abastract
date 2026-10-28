---
title: "Exercise G377: Primitive Rows and Eisenstein Coset Sums"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.2, Exercise 4.2.1, printed p. 115, PDF p. 129"
source_refs:
  - "S7/ch-4/sec-2/ex-1"
created: 2026-10-28
---

# Exercise G377: Primitive Rows and Eisenstein Coset Sums

## Problem Statement

> [!question] Original Exercise 4.2.1
> Show that the two sums in (4.4) agree.
>
> For $k\ge3$ and a row $\overline v\in(\mathbb Z/N\mathbb Z)^2$ of order $N$, choose $\delta\in\mathrm{SL}_2(\mathbb Z)$ whose bottom row lifts $\overline v$. Formula (4.4) is
> $$
> E_k^{\overline v}(\tau)=\epsilon_N\sum_{\substack{(c,d)\equiv\overline v\ (N)\\\gcd(c,d)=1}}(c\tau+d)^{-k}=\epsilon_N\sum_{\gamma\in(P_+\cap\Gamma(N))\backslash\Gamma(N)\delta}j(\gamma,\tau)^{-k},
> $$
> where $\epsilon_N=1/2$ for $N=1,2$ and $\epsilon_N=1$ for $N>2$.

## Hints

> [!hint]- Hint 1
> Every matrix in $\Gamma(N)\delta$ has a primitive bottom row in the prescribed congruence class.

> [!hint]- Hint 2
> Complete a prescribed row to a matrix $A$. Then $A\delta^{-1}$ is upper unipotent modulo $N$; alter the top row by a suitable translation.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $P_+(N)=P_+\cap\Gamma(N)=\{T^{nN}:n\in\mathbb Z\}$. Taking the bottom row sends $\Gamma(N)\delta$ into primitive rows congruent to $\overline v$, and is unchanged by left multiplication by $P_+(N)$.
>
> Given such a row $(c,d)$, use Bézout to complete it to $A\in\mathrm{SL}_2(\mathbb Z)$. Modulo $N$, the bottom row of $A\delta^{-1}$ is $(0,1)$, so its determinant-one condition makes it $\left(\begin{smallmatrix}1&x\\0&1\end{smallmatrix}\right)$ for some $x$ modulo $N$. Choose an integer lift $n$ of $x$. Then $T^{-n}A\delta^{-1}\in\Gamma(N)$, so $B=T^{-n}A\in\Gamma(N)\delta$. Its bottom row remains $(c,d)$, proving surjectivity of the row map.
>
> If $B,B'\in\Gamma(N)\delta$ have the same bottom row, the completion argument of Exercise 4.1.1 gives $B'=T^rB$ for some integer $r$. Since $B'B^{-1}\in\Gamma(N)$, necessarily $N\mid r$, so $T^r\in P_+(N)$. Thus the matrices give the same left coset, proving injectivity. The matched summands are identical. Both sums are absolutely convergent for $k>2$, so the bijection proves (4.4), with the identical prefactor $\epsilon_N$ retained.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.2.1, printed p. 115 / PDF p. 129]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** Formula (4.4) and all of its conventions are on printed p.111/PDF p.125. The argument proves the precise congruence-level coset bijection, including the top-row adjustment needed for surjectivity.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
