---
title: Mordell-Weil Theorem
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - theorem
created: 2026-01-19
---

# Mordell-Weil Theorem

## Statement

> [!abstract] Theorem (Mordell-Weil)
> Let $A$ be an abelian variety over a number field $K$. Then the group of $K$-rational points $A(K)$ is **finitely generated**:
> $$A(K) \cong \mathbb{Z}^r \oplus A(K)_{\text{tors}}$$
> where $r \geq 0$ is the **rank** and $A(K)_{\text{tors}}$ is a finite group.

For elliptic curves, this was proved by Mordell (1922) over $\mathbb{Q}$ and extended by Weil (1928) to abelian varieties over number fields.

## The Rank

> [!info] Definition (Rank)
> The **rank** of $A(K)$ is the number $r$ of independent points of infinite order.

| Rank | Meaning |
|------|---------|
| $r = 0$ | $A(K)$ is finite (only torsion) |
| $r = 1$ | One generator of infinite order |
| $r \geq 2$ | Multiple independent generators |

## Proof Outline

The proof has two main steps:

### Step 1: Weak Mordell-Weil

> [!abstract] Theorem (Weak Mordell-Weil)
> For any $n \geq 2$, the group $A(K)/nA(K)$ is finite.

This uses:
- Kummer theory / descent
- Finiteness of class group and unit group
- Selmer groups

### Step 2: Descent

Combined with the theory of [[08 - Arithmetic Geometry/Concepts/Heights|heights]]:

> [!abstract] Descent Lemma
> If $A(K)/nA(K)$ is finite and $\hat{h}$ is the canonical height, then $A(K)$ is finitely generated.

The key is: the set $\{P \in A(K) : \hat{h}(P) \leq C\}$ is finite (Northcott), and we can descend using $\hat{h}([n]P) = n^2 \hat{h}(P)$.

## Computing the Rank

> [!warning] Difficulty
> Computing the rank is a **hard problem**! No algorithm is known to work in all cases.

Methods:
1. **Descent**: Compute Selmer groups, bound rank
2. **BSD conjecture**: Relate rank to $L$-function (conjectural)
3. **Heights**: Find generators by searching

## Examples

> [!example] Example 1: Rank 0
> $E: y^2 = x^3 + 1$
> $E(\mathbb{Q}) \cong \mathbb{Z}/6\mathbb{Z}$
> Points: $\mathcal{O}, (2, 3), (0, 1), (-1, 0), (0, -1), (2, -3)$

> [!example] Example 2: Rank 1
> $E: y^2 = x^3 - 2$
> $E(\mathbb{Q}) \cong \mathbb{Z}$
> Generator: $P = (3, 5)$
> Then $2P = (129/100, -383/1000)$, etc.

> [!example] Example 3: Rank 2
> $E: y^2 = x^3 - 5x$
> $E(\mathbb{Q}) \cong \mathbb{Z}^2 \oplus \mathbb{Z}/2\mathbb{Z}$

## Rank Records

| Year | Record | Curve |
|------|--------|-------|
| 1938 | Rank 3 | Billing |
| 1975 | Rank 7 | Penney-Pomerance |
| 2006 | Rank 28 | Elkies |

It's unknown whether ranks are unbounded!

## Connection to BSD

> [!abstract] BSD Conjecture (Analytic Rank)
> $$\text{rank}(E(\mathbb{Q})) = \text{ord}_{s=1} L(E, s)$$

So far proved only for rank 0 and 1 (Gross-Zagier, Kolyvagin).

## Generalizations

- **Number fields**: Mordell-Weil holds for $A(K)$ where $K$ is any number field
- **Function fields**: Holds for abelian varieties over function fields
- **Finitely generated fields**: Also true (Lang-Néron)

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves]]
- [[08 - Arithmetic Geometry/Concepts/Heights|Heights]]
- [[08 - Arithmetic Geometry/Concepts/BSD Conjecture|BSD Conjecture]]
- [[08 - Arithmetic Geometry/Concepts/Abelian Varieties|Abelian Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
