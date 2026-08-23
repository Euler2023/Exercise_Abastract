---
title: Symmetric Groups
aliases:
  - Symmetric Group
  - Permutation Groups
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - symmetric-groups
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 1, §1.5, and Ch. 2, §2.2, printed pp. 24–27 and 40–43, PDF pp. 36–39 and 52–55"
source_status: partially-verified
status: not-started
---

# Symmetric Groups

## Definition

> [!info] Definition (Symmetric Group)
> Let $X$ be a set. A **permutation** of $X$ is a bijection $X\to X$. The set of all permutations of $X$, with function composition as its operation, is the **symmetric group** on $X$, denoted by $\operatorname{Sym}(X)$.

For the finite set $\{1,2,\ldots,n\}$, the symmetric group is denoted by
$$S_n=\operatorname{Sym}(\{1,2,\ldots,n\}).$$
It has
$$|S_n|=n!$$
elements, because a permutation is determined by successively choosing the images of $1,2,\ldots,n$.

## Group Structure

The group operation is composition of functions. Throughout this note, products act from right to left:
$$
(\sigma\tau)(x)=\sigma(\tau(x)).
$$

- The identity is the identity permutation $e(x)=x$.
- The inverse $\sigma^{-1}$ reverses the bijection $\sigma$.
- Associativity follows from associativity of function composition.

Thus the group structure is obtained as the group of units of the transformation monoid $\operatorname{End}(X)$; see [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]].

## Cycle Notation

The cycle
$$
(a_1\ a_2\ \cdots\ a_k)
$$
sends $a_1$ to $a_2$, $a_2$ to $a_3$, and so on, with $a_k$ sent back to $a_1$. Every element outside the displayed cycle is fixed.

Disjoint cycles commute because they move disjoint subsets. Every permutation of a finite set can be written as a product of disjoint cycles by following the orbit of each element until it returns to its starting point.

> [!abstract] Proposition (Disjoint-Cycle Decomposition)
> Every permutation in $S_n$ is a product of pairwise disjoint cycles.
>
> **Proof.** Let $\sigma\in S_n$ and choose an element $x$. Since the underlying set is finite, two terms in
> $$x,\sigma(x),\sigma^2(x),\ldots$$
> must agree. Because $\sigma$ is bijective, the first repeated value closes the orbit at $x$: for some least $k>0$,
> $$\sigma^k(x)=x.$$
> Hence $\sigma$ acts on this orbit as the cycle
> $$(x\ \sigma(x)\ \cdots\ \sigma^{k-1}(x)).$$
> If elements remain outside this orbit, repeat the construction with one of them. Distinct orbits are disjoint, and finiteness ensures that the process terminates. The resulting disjoint cycles agree with $\sigma$ on every element. $\square$

The inverse of a cycle reverses its direction:
$$
(a_1\ a_2\ \cdots\ a_k)^{-1}=(a_1\ a_k\ a_{k-1}\ \cdots\ a_2).
$$

> [!info] Definition (Transposition)
> A cycle of length $2$, written $(ab)$, is called a **transposition**. It exchanges $a$ and $b$ and fixes every other element.

> [!abstract] Proposition (Generation by Transpositions)
> Every element of $S_n$ is a product of transpositions.
>
> **Proof.** By the disjoint-cycle decomposition, it suffices to treat one cycle. For a $k$-cycle,
> $$
> (a_1\ a_2\ \cdots\ a_k)
> =(a_1a_k)(a_1a_{k-1})\cdots(a_1a_2).
> $$
> Apply the rightmost factor first: $a_1$ moves to $a_2$; each $a_i$ for $2\le i<k$ first moves to $a_1$ under $(a_1a_i)$ and then to $a_{i+1}$ under the next factor; and $a_k$ moves to $a_1$. Thus the product on the right has exactly the action of the cycle on the left. Applying this formula to every disjoint cycle proves the claim. $\square$

## The Group $S_3$

The six elements of $S_3$ are
$$
e,\quad (123),\quad (132),\quad (12),\quad (13),\quad (23).
$$
Let
$$r=(123),\qquad s=(12).$$
Then
$$
S_3=\{e,r,r^2,s,sr,sr^2\}
$$
and the defining relations include
$$
r^3=e,\qquad s^2=e,\qquad srs=r^{-1}.
$$
These relations provide a compact way to calculate the complete multiplication table in [[01 - Group Theory/Exercises/Exercise G10 - Multiplication Table of S3|Exercise G10]].

> [!abstract] Proposition
> The symmetric group $S_n$ is non-abelian for every $n\ge3$.
>
> **Proof.** In $S_n$, consider the transpositions $(12)$ and $(23)$. With right-to-left composition,
> $$(12)(23)=(123),$$
> whereas
> $$(23)(12)=(132).$$
> These products are different, so $(12)$ and $(23)$ do not commute. Hence $S_n$ is non-abelian for $n\ge3$. $\square$

## Key Properties

1. $S_n$ consists of all bijections of an $n$-element set and has order $n!$.
2. Multiplication is function composition and is generally noncommutative.
3. Every finite permutation has a disjoint-cycle decomposition.
4. Every permutation is a product of transpositions.
5. The inverse of a cycle is obtained by reversing its direction.

## Examples

> [!example] Example 1: Inverting a Cycle
> Since $(123)$ sends $1\mapsto2\mapsto3\mapsto1$, its inverse follows the arrows backward:
> $$(123)^{-1}=(132).$$

> [!example] Example 2: Solving a Permutation Equation
> An equation such as $xyz=e$ can be solved by multiplying by inverses in the correct order. Cyclic rearrangement gives $yzx=e$, but reversing the factors need not preserve the equation; see [[01 - Group Theory/Exercises/Exercise G12 - Solving Group Equations|Exercise G12]].

## Related Concepts

- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```


## Source and Proof Status

The entry point and $S_3$ exercise follow [S1, Ch. 2, Section 2, especially Ex. 2.1]. The counting argument, cycle identities, and noncommutativity proposition are proved or explicitly verified in this note; no classification theorem is used.
