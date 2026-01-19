---
title: Elliptic Curves (Arithmetic)
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-01-19
---

# Elliptic Curves (Arithmetic)

## Definition

> [!info] Definition (Elliptic Curve)
> An **elliptic curve** over a field $K$ is a smooth projective curve of genus 1 with a specified point $\mathcal{O} \in E(K)$.
>
> Standard form (Weierstrass):
> $$E: y^2 = x^3 + ax + b, \quad \Delta = -16(4a^3 + 27b^2) \neq 0$$

## Group Law

> [!abstract] Theorem
> The set $E(K)$ forms an **abelian group** with:
> - Identity: $\mathcal{O}$ (point at infinity)
> - Addition: Chord-tangent construction
> - Inverse: $-P = (x, -y)$ for $P = (x, y)$

## Key Arithmetic Invariants

### Discriminant and j-invariant

$$\Delta = -16(4a^3 + 27b^2)$$
$$j(E) = -1728 \frac{(4a)^3}{\Delta} = 1728 \frac{4a^3}{4a^3 + 27b^2}$$

### Conductor

The **conductor** $N$ measures bad reduction:
$$N = \prod_{p} p^{f_p}$$
where $f_p$ depends on the type of reduction at $p$.

## Reduction Types

For $E/\mathbb{Q}$ and prime $p$:

| Type | $\tilde{E}_p$ | Condition |
|------|---------------|-----------|
| Good | Smooth elliptic curve | $p \nmid \Delta$ |
| Multiplicative | Nodal cubic | $p | \Delta$, $p \nmid c_4$ |
| Additive | Cuspidal cubic | $p | \Delta$, $p | c_4$ |

## Mordell-Weil Theorem

> [!abstract] Theorem ([[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil]])
> For $E$ over a number field $K$:
> $$E(K) \cong \mathbb{Z}^r \oplus E(K)_{\text{tors}}$$
> where $r \geq 0$ is the **rank** and $E(K)_{\text{tors}}$ is finite.

## Torsion Structure

> [!abstract] Mazur's Theorem (1977)
> For $E/\mathbb{Q}$, the torsion subgroup is one of:
> $$\mathbb{Z}/n\mathbb{Z} \text{ for } n \in \{1,2,3,4,5,6,7,8,9,10,12\}$$
> $$\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2n\mathbb{Z} \text{ for } n \in \{1,2,3,4\}$$

## Rank

The rank $r$ is much more mysterious:
- Records: curves with rank $\geq 28$ are known
- **BSD Conjecture** relates rank to $L$-function behavior
- No algorithm is known to compute rank in all cases

## L-function

> [!info] Definition
> $$L(E, s) = \prod_{p \nmid N} \frac{1}{1 - a_p p^{-s} + p^{1-2s}} \cdot \prod_{p | N} (\text{local factors})$$
> where $a_p = p + 1 - \#E(\mathbb{F}_p)$.

By modularity: $L(E, s) = L(f, s)$ for some weight 2 newform $f$.

## Examples

> [!example] Example 1: $E: y^2 = x^3 - x$
> - $j = 1728$, CM by $\mathbb{Z}[i]$
> - $E(\mathbb{Q}) \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$
> - Rank 0

> [!example] Example 2: $E: y^2 = x^3 - 2$
> - $E(\mathbb{Q}) \cong \mathbb{Z}$
> - Rank 1, generator: $(3, 5)$

> [!example] Example 3: $E: y^2 + y = x^3 - x^2$ (Conductor 11)
> - $E(\mathbb{Q}) \cong \mathbb{Z}/5\mathbb{Z}$
> - Rank 0

## Selmer and Sha

> [!info] Definition
> The **Selmer group** $\text{Sel}^{(n)}(E/K)$ and **Tate-Shafarevich group** $\text{Ш}(E/K)$ fit in:
> $$0 \to E(K)/nE(K) \to \text{Sel}^{(n)}(E/K) \to \text{Ш}(E/K)[n] \to 0$$

The finiteness of $\text{Ш}$ is a major open problem (part of BSD).

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Heights|Heights]]
- [[08 - Arithmetic Geometry/Concepts/BSD Conjecture|BSD Conjecture]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Modularity Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
