---
title: Exponential Map
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lie-theory
created: 2026-01-19
---

# Exponential Map

## Definition

> [!info] Definition (Matrix Exponential)
> For a matrix $X \in \mathfrak{gl}_n$, the **exponential** is:
> $$e^X = \exp(X) = \sum_{k=0}^{\infty} \frac{X^k}{k!} = I + X + \frac{X^2}{2!} + \frac{X^3}{3!} + \cdots$$

This series always converges for any matrix $X$.

## The Lie Group-Lie Algebra Connection

> [!info] Definition (General Exponential Map)
> For a Lie group $G$ with Lie algebra $\mathfrak{g}$:
> $$\exp: \mathfrak{g} \to G$$
> defined by $\exp(X) = \gamma(1)$ where $\gamma$ is the unique one-parameter subgroup with $\gamma'(0) = X$.

For matrix Lie groups, this coincides with the matrix exponential.

## Key Properties

### Algebraic Properties

| Property | Formula |
|----------|---------|
| $\exp(0)$ | $= I$ (identity) |
| $\exp(tX)$ | One-parameter subgroup |
| $\frac{d}{dt}\exp(tX)\big|_{t=0}$ | $= X$ |
| $\exp(X)^{-1}$ | $= \exp(-X)$ |
| $\exp((s+t)X)$ | $= \exp(sX)\exp(tX)$ |

### When Does $e^X e^Y = e^{X+Y}$?

> [!warning] Important
> In general, $e^X e^Y \neq e^{X+Y}$!
>
> Equality holds if and only if $[X, Y] = 0$.

### Baker-Campbell-Hausdorff Formula

> [!abstract] Theorem (BCH Formula)
> $$e^X e^Y = e^Z$$
> where:
> $$Z = X + Y + \frac{1}{2}[X, Y] + \frac{1}{12}([X, [X, Y]] + [Y, [Y, X]]) + \cdots$$
>
> The full series involves nested commutators of all orders.

**First few terms**:
$$Z = X + Y + \frac{1}{2}[X, Y] + \frac{1}{12}[X, [X, Y]] - \frac{1}{12}[Y, [X, Y]] + \cdots$$

## Examples

> [!example] Example 1: Diagonal Matrices
> $$\exp\begin{pmatrix} a & 0 \\ 0 & b \end{pmatrix} = \begin{pmatrix} e^a & 0 \\ 0 & e^b \end{pmatrix}$$

> [!example] Example 2: Nilpotent Matrix
> For $N$ nilpotent ($N^k = 0$ for some $k$), the series terminates:
> $$\exp\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$$

> [!example] Example 3: Rotations ($\mathfrak{so}_2 \to \text{SO}(2)$)
> $$X = \begin{pmatrix} 0 & -\theta \\ \theta & 0 \end{pmatrix} \implies e^X = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

> [!example] Example 4: $\mathfrak{sl}_2$ Elements
> For $h = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$:
> $$e^{th} = \begin{pmatrix} e^t & 0 \\ 0 & e^{-t} \end{pmatrix}$$

> [!example] Example 5: $\mathfrak{su}_2 \to \text{SU}(2)$
> For $X = i\theta \vec{n} \cdot \vec{\sigma}$ (Pauli matrices):
> $$e^X = \cos\theta \cdot I + i\sin\theta \cdot \vec{n} \cdot \vec{\sigma}$$

## Surjectivity

> [!abstract] Theorem
> For a **connected** Lie group $G$:
> - Every $g \in G$ can be written as $g = \exp(X_1) \cdots \exp(X_k)$
> - The exponential map is **not** always surjective onto $G$

### Examples of Non-Surjectivity

> [!example] $\text{SL}_2(\mathbb{R})$
> The matrix $\begin{pmatrix} -1 & 1 \\ 0 & -1 \end{pmatrix}$ is NOT in the image of $\exp$.

> [!example] Compact Groups
> For **compact connected** Lie groups, $\exp$ IS surjective.

## Local Diffeomorphism

> [!abstract] Theorem
> The exponential map is a **local diffeomorphism** near $0 \in \mathfrak{g}$:
> $$\exp: U \xrightarrow{\sim} V$$
> for some neighborhoods $U \ni 0$ in $\mathfrak{g}$ and $V \ni e$ in $G$.

## Differential

> [!info] Formula
> The differential of $\exp$ at $X$ is:
> $$d(\exp)_X = \frac{1 - e^{-\text{ad}_X}}{\text{ad}_X} = \sum_{k=0}^{\infty} \frac{(-1)^k}{(k+1)!} (\text{ad}_X)^k$$
>
> At $X = 0$: $d(\exp)_0 = \text{id}$.

## Connection to Representations

> [!abstract] Theorem
> If $\rho: G \to \text{GL}(V)$ is a representation of Lie group $G$, then:
> $$d\rho: \mathfrak{g} \to \mathfrak{gl}(V)$$
> is a representation of the Lie algebra, and:
> $$\rho(\exp(X)) = e^{d\rho(X)}$$

This allows us to study Lie group representations via Lie algebra representations.

## Computing Exponentials

### Method 1: Diagonalization
If $X = PDP^{-1}$ with $D$ diagonal:
$$e^X = P e^D P^{-1}$$

### Method 2: Jordan Form
For Jordan block $J_\lambda$ of size $n$:
$$e^{J_\lambda} = e^\lambda \begin{pmatrix} 1 & 1 & \frac{1}{2!} & \cdots \\ 0 & 1 & 1 & \cdots \\ \vdots & & \ddots & \end{pmatrix}$$

### Method 3: Cayley-Hamilton
Use $X^n = c_0 I + c_1 X + \cdots + c_{n-1} X^{n-1}$ to reduce infinite series.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representations of Lie Algebras|Representations of Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
