---
title: "Exercise AG65: Holomorphic Group Maps between Complex Tori"
topic: arithmetic-geometry
difficulty: beginner
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.3, Exercise 1.3.2, printed p. 31, PDF p. 46"
source_refs:
  - "S7/ch-1/sec-3/ex-2"
created: 2026-10-24
---

# Exercise AG65: Holomorphic Group Maps between Complex Tori

## Problem Statement

> [!question] Original Exercise 1.3.2
> Prove Corollary 1.3.3. (A hint for this exercise is at the end of the book.)
>
> **Corollary 1.3.3, included for independent reading:** Suppose $\varphi:\mathbb C/\Lambda\longrightarrow\mathbb C/\Lambda'$ is a holomorphic map between complex tori, $\varphi(z+\Lambda)=mz+b+\Lambda'$ with $m\Lambda\subset\Lambda'$. Then the following are equivalent:
>
> (1) $\varphi$ is a group homomorphism;
>
> (2) $b\in\Lambda'$, so $\varphi(z+\Lambda)=mz+\Lambda'$;
>
> (3) $\varphi(0)=0$.
>
> In particular, there exists a nonzero holomorphic group homomorphism between $\mathbb C/\Lambda$ and $\mathbb C/\Lambda'$ if and only if there exists some nonzero $m\in\mathbb C$ such that $m\Lambda\subset\Lambda'$, and there exists a holomorphic group isomorphism between them if and only if there exists some $m\in\mathbb C$ such that $m\Lambda=\Lambda'$.
>
> The corollary is on printed p. 26 / PDF p. 41. The source uses $\subset$ for containment allowing equality; it is written $\subseteq$ in the solution.

## Hints

> [!hint]- Hint 1 — source appendix
> Prove $(1)\Rightarrow(3)\Rightarrow(2)\Rightarrow(1)$, as suggested in Appendix A, printed p. 414 / PDF p. 425.

> [!hint]- Hint 2
> Once $b\in\Lambda'$, addition is inherited directly from multiplication by $m$ on $\mathbb C$. If $m\ne0$, the kernel is $m^{-1}\Lambda'/\Lambda$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> All zeros below denote the identity cosets of their respective quotient groups.
>
> **The three equivalences.** If $\varphi$ is a group homomorphism, then
> $$
> \varphi(0)=\varphi(0+0)=\varphi(0)+\varphi(0),
> $$
> and subtraction gives $\varphi(0)=0$. Thus $(1)\Rightarrow(3)$.
>
> If $\varphi(0)=0$, then $b+\Lambda'=\Lambda'$, which says exactly that $b\in\Lambda'$. Thus $(3)\Rightarrow(2)$.
>
> Finally, if $b\in\Lambda'$, the translation term disappears. For any $z,w\in\mathbb C$,
> $$
> \begin{aligned}
> \varphi((z+\Lambda)+(w+\Lambda))
> &=m(z+w)+\Lambda'\\
> &=(mz+\Lambda')+(mw+\Lambda')
> =\varphi(z+\Lambda)+\varphi(w+\Lambda).
> \end{aligned}
> $$
> The containment $m\Lambda\subseteq\Lambda'$ ensures that changing representatives does not change these cosets. This proves $(2)\Rightarrow(1)$.
>
> **Existence of a nonzero homomorphism.** If such a holomorphic homomorphism exists, Proposition 1.3.2 expresses it in affine form. The equivalence just proved removes its translation term. Its multiplier cannot be zero, because that would make it the zero map. Conversely, any $m\ne0$ with $m\Lambda\subseteq\Lambda'$ defines a holomorphic group map $z+\Lambda\mapsto mz+\Lambda'$. The quotient projections are local biholomorphisms, so the map is holomorphic in their local charts. It is nonzero: choose $z$ with $mz\notin\Lambda'$, possible since $\Lambda'$ is discrete and $m\mathbb C=\mathbb C$.
>
> **Existence of an isomorphism.** An isomorphism has $m\ne0$. Its kernel is
> $$
> \{z+\Lambda:mz\in\Lambda'\}=m^{-1}\Lambda'/\Lambda.
> $$
> Injectivity forces $m^{-1}\Lambda'=\Lambda$, or $m\Lambda=\Lambda'$. Conversely, if $m\Lambda=\Lambda'$, then $m\ne0$ and
> $$
> w+\Lambda'\longmapsto m^{-1}w+\Lambda
> $$
> is a well-defined holomorphic inverse and a group homomorphism. This proves the last assertion.
>
> As a boundary example, $z+\Lambda\mapsto z+b+\Lambda$ is always a holomorphic automorphism of the underlying Riemann surface. It preserves the group structure precisely when $b\in\Lambda$. Translation by a nonzero point is therefore excluded by the identity condition.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** The complete exercise and corollary were visually checked at [Diamond–Shurman, Ch. 1, §1.3, printed pp. 26, 31, PDF pp. 41, 46]; the appendix hint was checked at [Appendix A, printed p. 414, PDF p. 425]. The source assigns the corollary's proof to this exercise.
- **Imported result:** Proposition 1.3.2, printed p. 26 / PDF p. 41, gives the affine form of a holomorphic map between tori. Its source proof is explicitly a sketch using the universal covering lifting theorem and Liouville's theorem. This note proves the assigned corollary, rather than claiming a new proof of those imported foundations.
- **Boundary:** The constant zero map is a homomorphism and has $m=0$; it is excluded only by the word “nonzero” in the existence statement.
