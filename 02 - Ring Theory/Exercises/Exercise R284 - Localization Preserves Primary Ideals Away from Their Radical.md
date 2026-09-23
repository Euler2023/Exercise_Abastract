---
title: "Exercise R284: Localization Preserves Primary Ideals Away from Their Radical"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - primary-ideals
  - localization
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 5, printed p. 443, PDF p. 458"
created: 2026-09-22
---

# Exercise R284: Localization Preserves Primary Ideals Away from Their Radical

## Problem Statement

> [!question] Lang, Chapter X, Exercise 5
> Let $A$ be an arbitrary commutative ring and let $S$ be a multiplicative subset. Let $\mathfrak p$ be a prime ideal and let $\mathfrak q$ be a $\mathfrak p$-primary ideal. Then $\mathfrak p$ intersects $S$ if and only if $\mathfrak q$ intersects $S$. Furthermore, if $\mathfrak q$ does not intersect $S$, then $S^{-1}\mathfrak q$ is $S^{-1}\mathfrak p$-primary in $S^{-1}A$.

## Hints

> [!hint]- Hint 1
> Use $\sqrt{\mathfrak q}=\mathfrak p$ and closure of $S$ under positive powers to compare the two intersections.

> [!hint]- Hint 2
> Recall the membership criterion
>
> $$
> a/s\in S^{-1}\mathfrak q
> \quad\Longleftrightarrow\quad
> ua\in\mathfrak q\text{ for some }u\in S.
> $$
>
> If $S\cap\mathfrak p=\varnothing$, primaryness shows that $ua\in\mathfrak q$ forces $a\in\mathfrak q$.

## Solution

> [!success]- Independently derived solution
> Since $\mathfrak q\subseteq\mathfrak p$, an element of $S\cap\mathfrak q$ also lies in $S\cap\mathfrak p$. Conversely, if $s\in S\cap\mathfrak p$, then $\mathfrak p=\sqrt{\mathfrak q}$ gives $s^n\in\mathfrak q$ for some $n\ge1$. As $s^n\in S$, this yields $S\cap\mathfrak q\ne\varnothing$.
>
> Assume from now on that both intersections are empty, and write $B=S^{-1}A$. For any ideal $I\subseteq A$, the fraction criterion is
>
> $$
> a/s\in S^{-1}I
> \quad\Longleftrightarrow\quad
> ua\in I\text{ for some }u\in S.
> $$
>
> Indeed, equality $a/s=c/t$ with $c\in I$ means $v(ta-sc)=0$ for some $v\in S$, so $vta\in I$. Conversely, if $ua\in I$, write $a/s=(ua)/(us)$.
>
> This criterion makes $\mathfrak q_B=S^{-1}\mathfrak q$ proper: if $1\in\mathfrak q_B$, some $u\in S$ lies in $\mathfrak q$. Moreover,
>
> $$
> ua\in\mathfrak q,\ u\in S
> \quad\Longrightarrow\quad a\in\mathfrak q.
> $$
>
> Otherwise primaryness would force a positive power of $u$ into $\mathfrak q$, contradicting $S\cap\mathfrak q=\varnothing$.
>
> Suppose now $(a/s)(b/t)\in\mathfrak q_B$ and $a/s\notin\mathfrak q_B$. The fraction criterion gives $uab\in\mathfrak q$ for some $u\in S$, and the preceding implication gives $ab\in\mathfrak q$. Also $a\notin\mathfrak q$, since otherwise $a/s\in\mathfrak q_B$. Primaryness in $A$ yields $b^n\in\mathfrak q$ for some $n\ge1$, and hence
>
> $$
> (b/t)^n=b^n/t^n\in\mathfrak q_B.
> $$
>
> Thus $\mathfrak q_B$ is primary.
>
> Finally, its radical is $S^{-1}\mathfrak p$. One inclusion follows because $a\in\mathfrak p$ implies $a^n\in\mathfrak q$ for some $n$. For the other, if $(a/s)^n\in\mathfrak q_B$, the membership criterion and the implication above yield $a^n\in\mathfrak q$, so $a\in\mathfrak p$. Consequently
>
> $$
> \sqrt{S^{-1}\mathfrak q}=S^{-1}\mathfrak p,
> $$
>
> which is exactly the claimed $S^{-1}\mathfrak p$-primary property.

## Related Concepts

- [[02 - Ring Theory/Concepts/Primary Ideals and Primary Decomposition|Primary Ideals and Primary Decomposition]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Source status:** The complete statement was visually checked at [S2, Ch. X, Ex. 5, printed p. 443, PDF p. 458]. The proof is independent, including the fraction membership test.
- **No injectivity assumption:** The localization map $A\to S^{-1}A$ may have a kernel. The multiplier $u\in S$ in the fraction criterion is essential.
- **Excluded case:** If $S$ meets $\mathfrak q$, then $S^{-1}\mathfrak q=S^{-1}A$, which is not a primary ideal under the proper-ideal convention.
