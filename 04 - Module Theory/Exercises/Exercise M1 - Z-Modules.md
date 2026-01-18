---
title: "Exercise M1: Abelian Groups are Z-Modules"
topic: module-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - module-theory
  - proof
source: "Dummit & Foote, Ch. 10"
created: 2025-01-19
---

# Exercise M1: Abelian Groups are Z-Modules

## Problem Statement

> [!question] Exercise
> Prove that every [[01 - Group Theory/Concepts/Abelian Groups|abelian group]] is a $\mathbb{Z}$-module in a natural way, and conversely, every $\mathbb{Z}$-module is an [[01 - Group Theory/Concepts/Abelian Groups|abelian group]].

## Hints

> [!hint]- Hint 1
> For an abelian group $(G, +)$, define $n \cdot g$ for $n \in \mathbb{Z}$ and $g \in G$.

> [!hint]- Hint 2
> Use $n \cdot g = g + g + \cdots + g$ for $n > 0$, and extend to negative $n$.

## Solution

> [!success]- Solution
> ### Proof
> **Part 1: Abelian group $\to$ $\mathbb{Z}$-module**
>
> Let $(G, +)$ be an abelian group. Define scalar multiplication $\mathbb{Z} \times G \to G$ by:
>
> $$n \cdot g = \begin{cases} \underbrace{g + g + \cdots + g}_{n \text{ times}} & \text{if } n > 0 \\ 0_G & \text{if } n = 0 \\ \underbrace{(-g) + (-g) + \cdots + (-g)}_{|n| \text{ times}} & \text{if } n < 0 \end{cases}$$
>
> Verify the module axioms:
>
> 1. **$n(g + h) = ng + nh$**: By commutativity, adding $n$ copies of $(g+h)$ equals adding $n$ copies of $g$ plus $n$ copies of $h$.
>
> 2. **$(m+n)g = mg + ng$**: Adding $m+n$ copies of $g$ equals adding $m$ copies then $n$ copies.
>
> 3. **$(mn)g = m(ng)$**: Adding $mn$ copies of $g$ equals adding $m$ copies of ($n$ copies of $g$).
>
> 4. **$1 \cdot g = g$**: Adding one copy of $g$ gives $g$.
>
> **Part 2: $\mathbb{Z}$-module $\to$ Abelian group**
>
> Let $M$ be a $\mathbb{Z}$-module. Then $(M, +)$ is an abelian group by definition of module.
>
> The scalar multiplication is uniquely determined by the group operation:
> - $1 \cdot m = m$
> - $n \cdot m = (1 + 1 + \cdots + 1) \cdot m = m + m + \cdots + m$
>
> So the $\mathbb{Z}$-module structure is completely determined by the abelian group structure. $\square$

## Related Concepts

- [[04 - Module Theory/Concepts/Module Definition|Module Definition]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

This shows that $\mathbb{Z}$-module theory is equivalent to the theory of abelian groups. The category of $\mathbb{Z}$-modules is the same as the category of abelian groups.
