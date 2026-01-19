---
title: Inverse Galois Problem
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - galois-theory
  - number-theory
created: 2026-01-19
---

# Inverse Galois Problem

## Introduction

The **Inverse Galois Problem** is one of the oldest unsolved problems in algebra. It asks which finite groups can be realized as Galois groups of field extensions of the rationals.

## Statement

> [!abstract] Inverse Galois Problem
> **Question**: For which finite groups $G$ does there exist a Galois extension $K/\mathbb{Q}$ with $\text{Gal}(K/\mathbb{Q}) \cong G$?
>
> **Conjecture**: Every finite group occurs as $\text{Gal}(K/\mathbb{Q})$ for some $K$.

### Variants

| Variant | Base Field | Status |
|---------|------------|--------|
| Over $\mathbb{Q}$ | Rationals | **Open** |
| Over $\mathbb{Q}(t)$ | Rational function field | **Open** (Regular IGP) |
| Over $\mathbb{C}(t)$ | Complex function field | **Solved** (Riemann) |
| Over $\mathbb{Q}^{ab}$ | Maximal abelian | **Open** |
| Over $\mathbb{F}_p(t)$ | Function field | **Solved** (Harbater) |

## Known Results

### Abelian Groups

> [!success] Theorem (Kronecker-Weber)
> Every finite abelian group is a Galois group over $\mathbb{Q}$.
>
> **Proof**: By class field theory, $\text{Gal}(\mathbb{Q}^{ab}/\mathbb{Q}) \cong \widehat{\mathbb{Z}}^\times$, which surjects onto every finite abelian group.

### Symmetric and Alternating Groups

> [!success] Theorem (Hilbert, 1892)
> For all $n \geq 1$:
> - $S_n$ is a Galois group over $\mathbb{Q}$
> - $A_n$ is a Galois group over $\mathbb{Q}$

**Method**: Hilbert irreducibility theorem applied to the general polynomial.

### Solvable Groups

> [!success] Theorem (Shafarevich, 1954)
> Every finite [[Solvable Groups]] is a Galois group over $\mathbb{Q}$.

This is a deep result using class field theory and embedding problems.

### Simple Groups

> [!info] Status of Finite Simple Groups
> | Family | Status |
> |--------|--------|
> | $A_n$ (alternating) | ✓ All realized |
> | $\text{PSL}_2(\mathbb{F}_p)$ | ✓ All realized |
> | $\text{PSL}_n(\mathbb{F}_q)$ | ✓ Most realized |
> | Sporadic groups | ✓ All 26 realized |
> | Exceptional Lie type | Many realized |

> [!success] Theorem (Thompson, et al.)
> All 26 **sporadic simple groups** are Galois groups over $\mathbb{Q}$, including the Monster group $\mathbb{M}$.

### The Monster Group

> [!example] Monster as Galois Group
> The Monster group $\mathbb{M}$ (order $\approx 8 \times 10^{53}$) is a Galois group over $\mathbb{Q}$.
>
> Proved by Thompson (1984) using the rigidity method and properties of the $j$-function.

## Methods

### 1. Hilbert Irreducibility Theorem

> [!abstract] Theorem (Hilbert)
> If $f(t, X) \in \mathbb{Q}(t)[X]$ is irreducible with Galois group $G$ over $\mathbb{Q}(t)$, then for "most" $t_0 \in \mathbb{Q}$:
> $$\text{Gal}(f(t_0, X)/\mathbb{Q}) = G$$
>
> ("Most" = all but a thin set)

**Application**: Reduces the problem over $\mathbb{Q}$ to the **Regular Inverse Galois Problem** over $\mathbb{Q}(t)$.

### 2. Rigidity Method

> [!info] Key Idea
> Realize $G$ as the Galois group of a cover $X \to \mathbb{P}^1$ branched over rational points.
>
> If the cover is **rigid** (unique up to isomorphism given branch data), it descends to $\mathbb{Q}$.

#### Rigidity Criterion

> [!abstract] Theorem
> Let $C_1, \ldots, C_r$ be conjugacy classes in $G$. If:
> 1. $(g_1, \ldots, g_r)$ with $g_i \in C_i$ and $g_1 \cdots g_r = 1$ generates $G$
> 2. Such tuples form a **single orbit** under $\text{Aut}(G)$
> 3. $\sum_i (1 - 1/|C_i|) = 2$
>
> Then $G$ is a Galois group over $\mathbb{Q}$.

This method has realized most known examples.

### 3. Noether's Problem

> [!info] Noether's Problem
> Given $G$ acting on $V = \mathbb{C}^n$, is the field of invariants $\mathbb{C}(V)^G$ purely transcendental over $\mathbb{C}$?
>
> If yes (and works over $\mathbb{Q}$), then $G$ is a Galois group over $\mathbb{Q}$.

**Results**:
- True for $G = S_n$ (classical)
- **False** for some groups (Swan's counterexamples)

### 4. Modular Curves and Shimura Varieties

> [!info] Geometric Approach
> Galois representations from:
> - Modular curves $X(N)$
> - Shimura varieties
> - Étale cohomology of varieties
>
> provide systematic sources of Galois extensions.

## The Regular Inverse Galois Problem

> [!abstract] Regular IGP
> For which $G$ is there a **regular** extension $K/\mathbb{Q}(t)$ with:
> - $\text{Gal}(K/\mathbb{Q}(t)) \cong G$
> - $K \cap \overline{\mathbb{Q}} = \mathbb{Q}$ (regularity)

Regular extensions specialize well by Hilbert irreducibility.

### Geometric Interpretation

Regular extensions correspond to:
- $G$-Galois covers $X \to \mathbb{P}^1_\mathbb{Q}$
- Defined over $\mathbb{Q}$
- Geometrically connected

## Embedding Problems

### Definition

> [!info] Definition (Embedding Problem)
> Given:
> - A Galois extension $K/\mathbb{Q}$ with $\text{Gal}(K/\mathbb{Q}) = H$
> - A surjection $\phi: G \twoheadrightarrow H$
>
> Find: A Galois extension $L/\mathbb{Q}$ with $\text{Gal}(L/\mathbb{Q}) = G$ and $L \supset K$.

```
    G
    │φ
    ↓
    H = Gal(K/ℚ)
```

### Role in IGP

Building up groups via central extensions:
$$1 \to A \to G \to H \to 1$$

If we can solve embedding problems, we can build $G$ from smaller pieces.

## Obstructions and Difficulties

### Why Is It Hard?

1. **No general construction**: Unlike over $\mathbb{C}(t)$, no topological methods
2. **Arithmetic constraints**: Ramification conditions, local-global issues
3. **No uniform bound**: Discriminants can be arbitrarily large

### Specific Challenges

> [!warning] Open Cases
> No single infinite family of groups is known to be completely impossible.
>
> Suspected difficult cases:
> - Certain wreath products
> - Some groups of Lie type in small characteristic

## Connection to Arithmetic Geometry

### Covers and Fundamental Groups

The algebraic fundamental group:
$$\pi_1^{\text{ét}}(\mathbb{P}^1_\mathbb{Q} \setminus \{0, 1, \infty\})$$

is extremely rich and encodes solutions to IGP.

### Grothendieck's Anabelian Vision

> [!info] Anabelian Geometry
> Grothendieck proposed studying $\text{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})$ through its action on:
> $$\pi_1^{\text{ét}}(\mathbb{P}^1_{\overline{\mathbb{Q}}} \setminus \{0, 1, \infty\})$$
>
> The Inverse Galois Problem is deeply connected to understanding this action.

### Belyi's Theorem

> [!abstract] Theorem (Belyi, 1979)
> A smooth projective curve over $\mathbb{C}$ is defined over $\overline{\mathbb{Q}}$ if and only if it admits a map to $\mathbb{P}^1$ ramified only over $\{0, 1, \infty\}$.

This connects covers of $\mathbb{P}^1 \setminus \{0, 1, \infty\}$ to arithmetic.

## The Absolute Galois Group

### Structure

> [!info] $\text{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})$
> The absolute Galois group of $\mathbb{Q}$ is:
> - Profinite
> - Extremely complicated
> - Projects onto $\text{Gal}(K/\mathbb{Q})$ for every Galois extension $K/\mathbb{Q}$
>
> IGP asks: which finite groups appear as these quotients?

### What We Know

$$\text{Gal}(\overline{\mathbb{Q}}/\mathbb{Q}) \twoheadrightarrow G$$

exists for all groups $G$ that have been realized.

## Summary of Known Results

| Group Type | Realized? | Method |
|------------|-----------|--------|
| Abelian | ✓ All | Class field theory |
| Solvable | ✓ All | Shafarevich |
| $S_n$, $A_n$ | ✓ All | Hilbert |
| $\text{PSL}_2(\mathbb{F}_p)$ | ✓ All | Rigidity |
| 26 sporadic | ✓ All | Rigidity/other |
| All simple of order $< 10^6$ | ✓ All | Various |
| General | ? | **OPEN** |

## Connection to Faltings' Theorem

The Inverse Galois Problem and [[08 - Arithmetic Geometry/Concepts/Faltings Theorem|Faltings' Theorem]] are two central results in arithmetic geometry that interact in deep and subtle ways.

### The Geometric Bridge: Galois Covers as Curves

> [!info] Key Observation
> The IGP asks for $G$-Galois covers $X \to \mathbb{P}^1$ defined over $\mathbb{Q}$.
>
> When such a cover exists, $X$ is a curve over $\mathbb{Q}$. If $\text{genus}(X) \geq 2$, then Faltings' theorem applies: $X(\mathbb{Q})$ is **finite**.

#### Riemann-Hurwitz Formula

For a $G$-Galois cover $X \to \mathbb{P}^1$ branched at $r$ points:
$$2g(X) - 2 = |G| \left( -2 + \sum_{i=1}^r \left(1 - \frac{1}{e_i}\right) \right)$$

where $e_i$ are ramification indices.

> [!example] Genus Computation
> A cover with $|G| = 60$ ($A_5$) branched at 3 points with ramification $(2, 3, 5)$:
> $$2g - 2 = 60 \left( -2 + \frac{1}{2} + \frac{2}{3} + \frac{4}{5} \right) = 60 \cdot \frac{-1}{30} = -2$$
> So $g = 0$. The cover is $\mathbb{P}^1 \to \mathbb{P}^1$.
>
> But with ramification $(2, 4, 5)$:
> $$2g - 2 = 60 \left( -2 + \frac{1}{2} + \frac{3}{4} + \frac{4}{5} \right) = 60 \cdot \frac{1}{20} = 3$$
> So $g = \frac{5}{2}$... impossible! No such cover exists.

### Finiteness Interplay

> [!abstract] Principle
> Both theorems are **finiteness results** in arithmetic geometry:
> - **Faltings**: Finitely many rational points on curves of genus $\geq 2$
> - **IGP** (when solved): Existence of Galois extensions with given group
>
> They constrain each other when the covering curve has high genus.

#### Rational Points on Covering Curves

If $\pi: X \to \mathbb{P}^1$ is a $G$-Galois cover with $g(X) \geq 2$:

1. $X(\mathbb{Q})$ is finite (Faltings)
2. Each $P \in X(\mathbb{Q})$ maps to some $\pi(P) \in \mathbb{P}^1(\mathbb{Q})$
3. The fiber $\pi^{-1}(t)$ for $t \in \mathbb{P}^1(\mathbb{Q})$ has at most $|G|$ points

> [!tip] Consequence
> For covers with high genus total space, rational points concentrate in finitely many fibers, even though $\mathbb{P}^1(\mathbb{Q})$ is infinite.

### Hurwitz Spaces and Malle's Conjecture

**Hurwitz spaces** $\mathcal{H}_{r,G}$ parametrize $G$-covers of $\mathbb{P}^1$ with $r$ branch points.

> [!info] Connection to Both Problems
> - **For IGP**: $\mathcal{H}_{r,G}(\mathbb{Q}) \neq \emptyset$ implies $G$ is a Galois group over $\mathbb{Q}$
> - **For Faltings-type questions**: When $\mathcal{H}_{r,G}$ is of general type, Lang's conjecture predicts $\mathcal{H}_{r,G}(\mathbb{Q})$ is not Zariski dense

**Malle's Conjecture** (counting number fields with Galois group $G$) is deeply connected to the geometry of Hurwitz spaces.

### Anabelian Geometry: The Deeper Connection

Grothendieck's **anabelian program** provides the conceptual framework unifying both results.

> [!abstract] The Section Conjecture
> For a hyperbolic curve $X$ over $\mathbb{Q}$ (genus $\geq 2$, or genus 1 with points removed, etc.):
> $$X(\mathbb{Q}) \longleftrightarrow \left\{ \text{sections of } 1 \to \pi_1^{\text{ét}}(X_{\bar{\mathbb{Q}}}) \to \pi_1^{\text{ét}}(X) \to \text{Gal}(\bar{\mathbb{Q}}/\mathbb{Q}) \to 1 \right\}$$
>
> Rational points correspond to splittings of the fundamental group sequence.

This conjecture (still open) directly connects:
- **Rational points** (Faltings' domain)
- **Galois actions on fundamental groups** (IGP's domain)

### Belyi's Theorem: The Common Ground

> [!success] Theorem (Belyi, 1979)
> A curve $X/\mathbb{C}$ is defined over $\bar{\mathbb{Q}}$ $\Leftrightarrow$ there exists a morphism $\beta: X \to \mathbb{P}^1$ ramified only over $\{0, 1, \infty\}$.

**Impact on both problems**:

| For IGP | For Faltings |
|---------|--------------|
| Every $G$-cover of $\mathbb{P}^1 \setminus \{0,1,\infty\}$ defined over $\bar{\mathbb{Q}}$ | Every curve over $\bar{\mathbb{Q}}$ is a Belyi cover |
| The étale fundamental group $\pi_1^{\text{ét}}(\mathbb{P}^1_{\bar{\mathbb{Q}}} \setminus \{0,1,\infty\})$ encodes all finite groups as quotients | Arithmetic of curves reduces to studying covers of $\mathbb{P}^1 \setminus \{0,1,\infty\}$ |

### Effective Methods: Where They Meet

Both problems have **effective** vs **ineffective** aspects:

| Problem | Ineffective Result | Effective Methods |
|---------|-------------------|-------------------|
| Faltings | $\#C(\mathbb{Q}) < \infty$ (no bound) | Chabauty-Coleman, Kim's method |
| IGP | Existence proofs (rigidity) | Explicit polynomial construction |

> [!example] Chabauty's Method and Covers
> For a curve $X$ with $\text{rank } J(\mathbb{Q}) < g$, Chabauty bounds $\#X(\mathbb{Q})$.
>
> If $X \to \mathbb{P}^1$ is a Galois cover, this bounds rational points in all fibers, constraining which specializations give the full Galois group.

### The Moduli Perspective

Both problems involve **moduli spaces**:

```
                    Faltings' Theorem
                          │
                          ▼
            ┌─────────────────────────────┐
            │   Moduli of Curves M_g      │
            │   (curves of genus g)       │
            └─────────────────────────────┘
                          │
          Jacobian map    │
                          ▼
            ┌─────────────────────────────┐
            │   Moduli of Abelian         │
            │   Varieties A_g             │
            └─────────────────────────────┘
                          │
    Shafarevich           │
    Conjecture            ▼
            ┌─────────────────────────────┐
            │   Finiteness of isogeny     │
            │   classes (Faltings)        │
            └─────────────────────────────┘

                 Inverse Galois Problem
                          │
                          ▼
            ┌─────────────────────────────┐
            │   Hurwitz Spaces H_{r,G}    │
            │   (G-covers with r branches)│
            └─────────────────────────────┘
                          │
                          ▼
            ┌─────────────────────────────┐
            │   Configuration Space       │
            │   (Conf_r(P^1))             │
            └─────────────────────────────┘
```

### Summary of Connections

| Aspect | Faltings' Theorem | Inverse Galois Problem |
|--------|-------------------|------------------------|
| **Object** | Rational points on curves | Galois groups over $\mathbb{Q}$ |
| **Finiteness** | $\#C(K) < \infty$ for $g \geq 2$ | Realized groups form a set |
| **Covers** | $C$ can be a covering curve | Seeks $G$-covers of $\mathbb{P}^1$ |
| **Fundamental group** | Section conjecture | Quotients of $\pi_1^{\text{ét}}$ |
| **Moduli** | $\mathcal{M}_g$, $\mathcal{A}_g$ | Hurwitz spaces |
| **Belyi** | All curves are Belyi covers | Covers of $\mathbb{P}^1 \setminus \{0,1,\infty\}$ |

## Related Problems

### Beckmann-Black Problem

For which $G$ does the minimal polynomial have degree exactly $|G|$?

### Malle's Conjecture

Asymptotic count of number fields with given Galois group:
$$N(G, X) \sim c_G X^{1/a(G)} (\log X)^{b(G)}$$

### Constructive Aspects

Given $G$, find an **explicit** polynomial $f(X) \in \mathbb{Q}[X]$ with $\text{Gal}(f) = G$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory|]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/Langlands Program|Langlands Program]]
- [[06 - Representation Theory/Concepts/Monster Group|Monster Group]]
- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]
- [[08 - Arithmetic Geometry/Concepts/Faltings Theorem|Faltings' Theorem]]
