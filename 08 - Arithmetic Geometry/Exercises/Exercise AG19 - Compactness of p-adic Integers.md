---
title: "Exercise AG19: Compactness of p-adic Integers"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - p-adic-numbers
  - compactness
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 7, printed p. 496, PDF p. 511"
created: 2026-09-25
---

# Exercise AG19: Compactness of p-adic Integers

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 7
> Show that the ring of $p$-adic integers $\mathbb Z_p$ is compact. Show that the group of units in $\mathbb Z_p$ is compact.

## Hints

> [!hint]- Hint 1: Use finite residue rings
> At each level $n$, the balls $a+p^n\mathbb Z_p$ are indexed by the finite ring $\mathbb Z/p^n\mathbb Z$.

> [!hint]- Hint 2: Suppose an open cover fails
> If a ball has no finite subcover, one of its finitely many children at the next level also has no finite subcover.

> [!hint]- Hint 3: Apply completeness
> An infinite nested chain of these balls has a common $p$-adic integer. Any open set containing that integer contains one of the balls in the chain.

## Solution

> [!success]- Solution
> A basic open ball of $\mathbb Z_p$ has the form $B_n(a)=a+p^n\mathbb Z_p$. Every such ball is also closed, and it is the disjoint union of the $p$ balls $B_{n+1}(a+bp^n)$ for $b=0,\ldots,p-1$.
>
> Suppose an open cover $\mathcal U$ of $\mathbb Z_p$ has no finite subcover. Begin with $B_0(0)=\mathbb Z_p$. If a ball $B_n(a_n)$ has no finite subcover from $\mathcal U$, then at least one of its $p$ children also has no finite subcover; otherwise the finite covers of all the children would combine into a finite cover of the parent. Inductively choose a nested sequence
>
> $$
> B_0(a_0)\supseteq B_1(a_1)\supseteq B_2(a_2)\supseteq\cdots
> $$
>
> in which no ball has a finite subcover. The centers can be chosen compatibly, so $a_{n+1}\equiv a_n\pmod{p^n}$. They form a Cauchy sequence in $\mathbb Q_p$. By completeness it converges to some $x\in\mathbb Z_p$, and the closedness of each ball gives $x\in B_n(a_n)$ for all $n$.
>
> Some $U\in\mathcal U$ contains $x$. Because the $p$-adic balls form a neighborhood basis, $B_N(x)\subseteq U$ for some $N$. But $B_N(x)=B_N(a_N)$, so this ball is covered by the single member $U$ of $\mathcal U$, a contradiction. Hence $\mathbb Z_p$ is compact.
>
> Finally, $x\in\mathbb Z_p$ is a unit exactly when its reduction modulo $p$ is nonzero. Thus
>
> $$
> \mathbb Z_p^\times
> =\mathbb Z_p\setminus p\mathbb Z_p
> =\bigcup_{a=1}^{p-1}(a+p\mathbb Z_p).
> $$
>
> The set $p\mathbb Z_p$ is open, so its complement $\mathbb Z_p^\times$ is closed in the compact space $\mathbb Z_p$ and therefore compact.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]

## Notes

- **Routing:** Compactness of a $p$-adic arithmetic ring and its unit group is the main result; finite residue rings and completeness drive the proof.
- **Proof status:** The nested-ball argument is independently derived from the definition of $\mathbb Q_p$ as a completion and the finite quotient $\mathbb Z_p/p\mathbb Z_p\simeq\mathbb F_p$. The closed-subset compactness implication is elementary topology.
- **Source status:** Both requests were checked against [S2, Ch. XII, Exercise 7, printed p. 496, PDF p. 511].
