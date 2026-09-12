---
title: Infinite Galois Extensions and Krull Topology
aliases:
  - Krull Topology
  - Infinite Galois Theory
  - Profinite Groups
  - Profinite Galois Groups
topic: galois-theory
tags:
  - concept
  - definition
  - theorem
  - galois-theory
  - topology
  - profinite-groups
created: 2026-09-12
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, §1, printed pp. 262–267, PDF pp. 277–282"
source_status: verified
status: not-started
---

# Infinite Galois Extensions and Krull Topology

## Definition

Let $K/k$ be an algebraic extension of fields. We say that $K/k$ is **Galois** if it is normal and separable. The **Galois group** of $K/k$ is the group
$$
G = \operatorname{Gal}(K/k) = \operatorname{Aut}_k(K)
$$
of all field automorphisms of $K$ fixing $k$ pointwise.

When $[K : k] = \infty$, the classical Galois correspondence fails without a topology: there are strictly more subgroups of $G$ than intermediate fields. Wolfgang Krull introduced a natural topology on $G$ to restore the bijective correspondence.

> [!info] The Krull Topology
> The **Krull topology** on $G = \operatorname{Gal}(K/k)$ is the topology defined by taking as a fundamental system of open neighborhoods of the identity the normal subgroups
> $$
> H_F = \operatorname{Gal}(K/F)
> $$
> as $F$ ranges over all finite Galois extensions of $k$ contained in $K$.
> A base for the open sets of the Krull topology consists of all cosets
> $$
> \sigma H_F \quad (\sigma \in G, \, F/k \text{ finite Galois}, \, F \subseteq K).
> $$

Equivalently, taking all intermediate fields $E$ that are finite (not necessarily Galois) over $k$ yields the same topology, because every finite extension is contained in a finite Galois extension.

## Inverse Limit and Profinite Structure

Let $\mathcal{F}$ be the family of all finite Galois extensions $F/k$ contained in $K$, ordered by inclusion.
For $F_1 \subseteq F_2$, there is a natural restriction homomorphism
$$
\operatorname{Gal}(F_2/k) \to \operatorname{Gal}(F_1/k), \left.\quad \sigma \mapsto \sigma\right|_{F_1}.
$$
The projective system $\{\operatorname{Gal}(F/k)\}_{F \in \mathcal{F}}$ gives rise to the **projective (inverse) limit**:
$$
\varprojlim_{F \in \mathcal{F}} \operatorname{Gal}(F/k) = \left\{ (\sigma_F) \in \prod_{F \in \mathcal{F}} \operatorname{Gal}(F/k) \;\middle|\; \left.\sigma_{F_2}\right|_{F_1} = \sigma_{F_1} \text{ whenever } F_1 \subseteq F_2 \right\}.
$$

> [!abstract] Theorem (Topological Isomorphism)
> The natural map
> $$
> \Psi: \operatorname{Gal}(K/k) \longrightarrow \varprojlim_{F \in \mathcal{F}} \operatorname{Gal}(F/k), \quad \sigma \longmapsto \left(\left.\sigma\right|_F\right)_{F \in \mathcal{F}}
> $$
> is an isomorphism of topological groups, where each finite group $\operatorname{Gal}(F/k)$ is endowed with the discrete topology, the product has the Tychonoff product topology, and the inverse limit has the subspace topology.

### Key Topological Properties

1. **Compactness:** Since each finite group $\operatorname{Gal}(F/k)$ is compact in the discrete topology, the product $\prod_{F \in \mathcal{F}} \operatorname{Gal}(F/k)$ is compact by Tychonoff's theorem. The inverse limit is a closed subset of this compact product, hence $\operatorname{Gal}(K/k)$ is **compact**.
2. **Hausdorff:** For any $\sigma \ne \tau$, there is some $\alpha \in K$ such that $\sigma(\alpha) \ne \tau(\alpha)$. Choosing $F$ to be the Galois closure of $k(\alpha)$ separates $\sigma$ and $\tau$ into disjoint open cosets. Thus $G$ is **Hausdorff**.
3. **Totally Disconnected:** The open subgroups $H_F$ are both open and closed (clopen). Hence the connected component of the identity is $\{1\}$, meaning $G$ is **totally disconnected**.
4. A compact, Hausdorff, totally disconnected topological group is called a **profinite group**.

## The Fundamental Theorem of Infinite Galois Theory

> [!abstract] Theorem (Krull's Galois Correspondence)
> Let $K/k$ be an arbitrary (possibly infinite) Galois extension with Galois group $G = \operatorname{Gal}(K/k)$ endowed with the Krull topology.
> 1. There is an inclusion-reversing bijection:
>    $$
>    \{F \mid k \subseteq F \subseteq K\} \longleftrightarrow \{H \le G \mid H \text{ is a closed subgroup}\},
>    $$
>    given by:
>    $$
>    F \longmapsto \operatorname{Gal}(K/F), \qquad H \longmapsto K^H = \{x \in K \mid \sigma(x) = x \text{ for all } \sigma \in H\}.
>    $$
> 2. An intermediate field $F$ is a **finite extension** of $k$ if and only if $\operatorname{Gal}(K/F)$ is an **open subgroup** of $G$. In this case, $[F : k] = (G : \operatorname{Gal}(K/F))$.
> 3. An intermediate field $F$ is **Galois over $k$** if and only if $H = \operatorname{Gal}(K/F)$ is a **closed normal subgroup** of $G$. In this case,
>    $$
>    \operatorname{Gal}(F/k) \cong G / H
>    $$
>    as topological groups (with the quotient topology on $G/H$).
> 4. For any arbitrary (not necessarily closed) subgroup $H \le G$, the fixed field of $H$ satisfies:
>    $$
>    \operatorname{Gal}(K / K^H) = \bar{H},
>    $$
>    where $\bar{H}$ is the topological closure of $H$ in $G$.

## Examples

1. **Algebraic Closure of a Finite Field:**
   Let $k = \mathbb{F}_q$ and $K = \bar{\mathbb{F}}_q$. The finite extensions of $\mathbb{F}_q$ are $\mathbb{F}_{q^n}$ with Galois groups $\operatorname{Gal}(\mathbb{F}_{q^n}/\mathbb{F}_q) \cong \mathbb{Z}/n\mathbb{Z}$.
   The absolute Galois group is the profinite completion of $\mathbb{Z}$:
   $$
   \operatorname{Gal}(\bar{\mathbb{F}}_q / \mathbb{F}_q) \cong \varprojlim_{n} \mathbb{Z}/n\mathbb{Z} = \widehat{\mathbb{Z}} \cong \prod_{p \text{ prime}} \mathbb{Z}_p.
   $$
   The Frobenius automorphism $\sigma: x \mapsto x^q$ generates a dense cyclic subgroup $\langle \sigma \rangle \cong \mathbb{Z}$ in $\widehat{\mathbb{Z}}$, but $\langle \sigma \rangle \ne \widehat{\mathbb{Z}}$. The fixed field of $\langle \sigma \rangle$ is $\mathbb{F}_q$, which equals the fixed field of the full closure $\overline{\langle \sigma \rangle} = \widehat{\mathbb{Z}}$.

2. **Maximal Abelian Extension of $\mathbb{Q}$:**
   By the Kronecker-Weber theorem, $\mathbb{Q}^{\text{ab}} = \bigcup_{n=1}^\infty \mathbb{Q}(\zeta_n)$.
   Its Galois group is:
   $$
   \operatorname{Gal}(\mathbb{Q}^{\text{ab}}/\mathbb{Q}) \cong \varprojlim_n (\mathbb{Z}/n\mathbb{Z})^* \cong \widehat{\mathbb{Z}}^* \cong \prod_p \mathbb{Z}_p^*.
   $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, §1, printed pp. 262–267, PDF pp. 277–282.
- Krull, W. (1928), *Galoissche Theorie der unendlichen algebraischen Körpererweiterungen*, Math. Ann. 100, 687–698.
