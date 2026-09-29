---
title: "Exercise R303: Artinian Rings with Zero Radical Are Semisimple"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - jacobson-radical
  - artinian-rings
  - semisimplicity
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 3, printed p. 661, PDF p. 676"
created: 2026-09-29
---

# Exercise R303: Artinian Rings with Zero Radical Are Semisimple

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 3
> Let $R$ be Artinian. Show that its radical is $0$ if and only if $R$ is semisimple.
>
> **Printed hint.** Get an injection of $R$ into a direct sum $\bigoplus R/M_i$ where $\{M_i\}$ is a finite set of maximal left ideals.

> [!warning] Source issue: the zero ring and Lang's convention
> Lang defines a semisimple ring to satisfy $1\ne0$ as well as being semisimple as a left module over itself [Ch. XVII, §4, printed p. 651, PDF p. 666]. Under that convention, the printed assertion needs $R\ne0$: the zero ring is Artinian and has zero radical but is excluded from the definition of a semisimple ring. The proof below assumes $R\ne0$. If one extends the ring terminology to include the zero ring, the same module criterion covers it.

## Hints

> [!hint]- Hint 1: Minimize a finite intersection
> Consider all finite intersections of maximal left ideals and use the descending chain condition to find a minimal one. Intersect it with any further maximal left ideal.

> [!hint]- Hint 2: Work inside a finite sum of simple modules
> The diagonal map $R\to\bigoplus_i R/M_i$ has kernel $\bigcap_iM_i$. A submodule of a finite direct sum of simple modules is semisimple; this can be proved by induction on the number of summands.

## Solution

> [!success]- Independent derivation using a finite separating family
> Assume $R\ne0$, and write $N=J(R)$. The term Artinian means left Artinian. Every nonzero unital ring has a maximal left ideal: apply Zorn's lemma to the proper left ideals, whose chains have proper unions because a union containing $1$ already has a member containing $1$.
>
> **If $N=0$, obtain a finite family.** Consider the nonempty collection of finite nonempty intersections of maximal left ideals. By the descending chain condition, it has a minimal member
>
> $$
> K=M_1\cap\cdots\cap M_t.
> $$
>
> For any maximal left ideal $M$, the intersection $K\cap M$ belongs to the same collection and is contained in $K$. Minimality gives $K\cap M=K$, so $K\subseteq M$. Thus $K\subseteq\bigcap_M M=N=0$, and $K=0$.
>
> The diagonal homomorphism of left modules
>
> $$
> \delta:R\longrightarrow\bigoplus_{i=1}^t R/M_i,
> \qquad r\longmapsto(r+M_i)_{i=1}^t
> $$
>
> has kernel $K=0$ and is therefore injective. Each $R/M_i$ is simple.
>
> **A finite-sum lemma.** Every submodule $U$ of $S_1\oplus\cdots\oplus S_t$, with the $S_i$ simple, is a direct sum of simple modules. For $t=0$ this is the zero module, and for $t=1$ it follows from simplicity. For the induction step, write $T=S_2\oplus\cdots\oplus S_t$. The intersection $U\cap S_1$ is either $0$ or $S_1$. In the first case, projection to $T$ restricts to an injective map $U\to T$, identifying $U$ with a submodule of $T$; the induction hypothesis applies. In the second case, $S_1\subseteq U$, and every $u=s+t\in U$ satisfies $t=u-s\in U\cap T$, so $U=S_1\oplus(U\cap T)$; apply induction to $U\cap T$. This proves the lemma.
>
> Applying the lemma to $\delta(R)$ shows that the regular left module $R$ is semisimple. Since $R\ne0$, it is a semisimple ring in Lang's sense.
>
> **Conversely, assume $R$ is semisimple.** Write its regular left module as a direct sum of simple left ideals. By R301, $N$ annihilates every simple left module, so it annihilates each summand and therefore annihilates $R$. But $n=n1$ for $n\in N$, so $NR=0$ forces $N=0$. This direction does not need the Artinian assumption.

## Related Concepts

- [[02 - Ring Theory/Concepts/Jacobson Radical and Artinian Rings|Jacobson Radical and Artinian Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Exercises/Exercise R301 - The Jacobson Radical and Simple Modules|Exercise R301]]
- [[02 - Ring Theory/Exercises/Exercise R302 - Descending Chains and Minimal Ideals in Artinian Rings|Exercise R302]]

## Notes

- **Source and proof status:** The statement and complete hint were checked at [S2, Ch. XVII, Ex. 3, printed p. 661, PDF p. 676]; the nonzero convention was checked at [S2, Ch. XVII, §4, printed p. 651, PDF p. 666]. The proof independently supplies the finite-intersection argument and the finite-sum lemma. The general submodule theorem also appears as Proposition 2.2, printed p. 646, PDF p. 661.
- **Boundary:** The diagonal map is a map of left modules, since the maximal left ideals need not be two-sided. The proof does not assume the Artin–Wedderburn structure theorem or that an Artinian ring is Noetherian.
