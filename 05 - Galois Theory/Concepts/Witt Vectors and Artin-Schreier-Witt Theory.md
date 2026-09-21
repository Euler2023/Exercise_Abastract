---
title: Witt Vectors and Artin-Schreier-Witt Theory
aliases:
  - Witt Vectors
  - Artin-Schreier-Witt Theory
  - Artin-Schreier-Witt Extensions
  - Witt Group
topic: galois-theory
tags:
  - concept
  - definition
  - theorem
  - galois-theory
  - characteristic-p
  - witt-vectors
created: 2026-09-12
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, §10, Exercises 46–51, printed pp. 330–332, PDF pp. 345–347"
source_status: verified
status: not-started
---

# Witt Vectors and Artin-Schreier-Witt Theory

## Motivation and Overview

In characteristic $p > 0$, Kummer theory cannot classify cyclic extensions of degree $p^n$ because a field of characteristic $p$ contains no primitive $p$-th roots of unity (as $X^p - 1 = (X - 1)^p$).
While Artin-Schreier theory classifies cyclic extensions of degree $p$ via equations of the form $X^p - X = a$, extending this classification to cyclic extensions of prime-power degree $p^n$ requires the ring of **Witt vectors**, introduced by Ernst Witt (1936).

## Witt Polynomials and Ghost Components

Let $p$ be a fixed prime number. For each integer $n \ge 0$, the $n$-th **Witt polynomial** is defined by:
$$
W^{(n)}(X) = W^{(n)}(X_0, X_1, \dots, X_n) = \sum_{i=0}^n p^i X_i^{p^{n-i}} = X_0^{p^n} + p X_1^{p^{n-1}} + \dots + p^n X_n.
$$
For an element $x = (x_0, x_1, \dots) \in A^{\mathbf{N}}$ where $A$ is a commutative ring, the components
$$
x^{(n)} = W^{(n)}(x_0, \dots, x_n) \in A
$$
are called the **ghost components** (or phantom components) of $x$.

### Addition and Multiplication of Witt Vectors

> [!abstract] Theorem (Witt)
> There exist unique families of polynomials with integer coefficients:
> $$
> S_n(X_0, \dots, X_n; Y_0, \dots, Y_n) \in \mathbf{Z}[X_0, \dots, X_n, Y_0, \dots, Y_n],
> $$
> $$
> P_n(X_0, \dots, X_n; Y_0, \dots, Y_n) \in \mathbf{Z}[X_0, \dots, X_n, Y_0, \dots, Y_n],
> $$
> such that for all $n \ge 0$:
> $$
> W^{(n)}(S_0, \dots, S_n) = W^{(n)}(X) + W^{(n)}(Y),
> $$
> $$
> W^{(n)}(P_0, \dots, P_n) = W^{(n)}(X) \cdot W^{(n)}(Y).
> $$

For any commutative ring $A$, the set $W(A) = A^{\mathbf{N}}$ endowed with addition $(x + y)_n = S_n(x, y)$ and multiplication $(x \cdot y)_n = P_n(x, y)$ forms a commutative ring with identity $1 = (1, 0, 0, \dots)$ and zero $0 = (0, 0, 0, \dots)$, called the **ring of Witt vectors** over $A$.

For each integer $n \ge 1$, the first $n$ components define the ring of **truncated Witt vectors of length $n$**:
$$
W_n(A) = A^n.
$$
In particular, for $n = 1$, $W_1(A) \cong A$ is the original ring.

## The Operators $V$ and $F$

On the ring of Witt vectors $W(A)$, two fundamental endomorphisms (as additive groups) are defined:

1. **The Shift (Verschiebung) Operator $V$:**
   $$
   V(x_0, x_1, x_2, \dots) = (0, x_0, x_1, \dots).
   $$
   On ghost components, $V(x)^{(n)} = p x^{(n-1)}$ for $n \ge 1$, and $V(x)^{(0)} = 0$.
   The image $V^n(W(A))$ is an ideal in $W(A)$, and $W(A) / V^n(W(A)) \cong W_n(A)$.

2. **The Frobenius Operator $F$:**
   When $A$ has characteristic $p$, the $p$-th power map $a \mapsto a^p$ is an endomorphism of $A$, and $F$ acts componentwise:
   $$
   F(x_0, x_1, x_2, \dots) = (x_0^p, x_1^p, x_2^p, \dots).
   $$
   On ghost components, $F(x)^{(n)} = x^{(n+1)}$.

### Fundamental Operator Relations

When $\operatorname{char}(A) = p$:
1. $F$ is a ring homomorphism $W(A) \to W(A)$.
2. $F \circ V = V \circ F = p \cdot \operatorname{id}_{W(A)}$.
3. $x \cdot V(y) = V(F(x) \cdot y)$ for all $x, y \in W(A)$.

For a perfect field $k$ of characteristic $p$, $W(k)$ is a complete discrete valuation ring of characteristic 0 with maximal ideal $p W(k)$ and residue field $W(k)/p W(k) \cong k$.
For example, $W(\mathbb{F}_p) \cong \mathbb{Z}_p$, the ring of $p$-adic integers.

## Artin-Schreier-Witt Theory

Let $k$ be a field of characteristic $p > 0$.
Define the **Artin-Schreier-Witt operator** $\wp$ on $W_n(k)$ by:
$$
\wp(x) = F(x) - x = (x_0^p - x_0, x_1^p - x_1, \dots, x_{n-1}^p - x_{n-1}) \pmod{\text{Witt addition}}.
$$
The map $\wp: W_n(k) \to W_n(k)$ is an additive group homomorphism with kernel:
$$
\ker(\wp) = W_n(\mathbb{F}_p) \cong \mathbb{Z}/p^n\mathbb{Z}.
$$

> [!abstract] Theorem (Artin-Schreier-Witt Duality)
> Let $k$ be a field of characteristic $p$.
> 1. For any element $\alpha \in W_n(k)$, the equation
>    $$
>    \wp(\xi) = F(\xi) - \xi = \alpha, \quad \xi \in W_n(\bar{k}),
>    $$
>    defines a field extension $k_\alpha = k(\xi_0, \dots, \xi_{n-1})$, which is an abelian Galois extension of $k$ of degree dividing $p^n$ and exponent dividing $p^n$.
> 2. The correspondence
>    $$
>    \Delta \longleftrightarrow K_\Delta = k(\wp^{-1}(\Delta))
>    $$
>    establishes an inclusion-preserving bijection between:
>    - subgroups $\Delta$ of $W_n(k)$ containing $\wp(W_n(k))$ such that $\Delta / \wp(W_n(k))$ is finite;
>    - finite abelian Galois extensions $K/k$ of exponent dividing $p^n$.
> 3. The Galois group $\operatorname{Gal}(K_\Delta / k)$ is canonically isomorphic to the Pontryagin dual of $\Delta / \wp(W_n(k))$:
>    $$
>    \operatorname{Gal}(K_\Delta / k) \cong \operatorname{Hom}\left(\Delta / \wp(W_n(k)), \mathbb{Z}/p^n\mathbb{Z}\right).
>    $$
> 4. In particular, cyclic extensions of degree $p^n$ over $k$ correspond bijectively to cyclic subgroups of order $p^n$ in $W_n(k) / \wp(W_n(k))$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Artin-Schreier Extensions|Artin-Schreier Extensions]]
- [[Cyclic Extensions|Cyclic Field Extension]] 
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert's Theorem 90]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, §10, Exercises 46–51, printed pp. 330–332, PDF pp. 345–347.
- Witt, E. (1936), *Zyklische Körper und Algebren der Charakteristik p vom Grade $p^n$*, J. Reine Angew. Math. 176, 126–140.
