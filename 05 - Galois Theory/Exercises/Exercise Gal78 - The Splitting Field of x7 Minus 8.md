---
title: "Exercise Gal78: The Splitting Field of x^7 - 8"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - splitting-fields
  - composita
  - semidirect-products
  - source-erratum
source: "Yu Pin, Groups and Galois Theory (群与 Galois 理论), §5.6.2, Example 5.26, printed p. 184, PDF p. 184"
created: 2026-08-13
---

# Exercise Gal78: The Splitting Field of $x^7-8$

## Problem Statement

> [!question] Example 5.26
> Let $K$ be the splitting field of $x^7-8$ over $\mathbb Q$. Determine
>
> $$
> \operatorname{Gal}(K/\mathbb Q).
> $$

> [!warning] Source issue
> The source correctly obtains $[K:\mathbb Q]=42$ and identifies subgroups of orders $7$ and $6$, but it then states that the Galois group is their direct product and hence cyclic of order $42$. This final step is false: the order-$6$ subgroup acts nontrivially on the order-$7$ subgroup by conjugation. The correct structure is a nonabelian semidirect product.

## Hints

> [!hint]- Hint 1
> Put $\alpha=\sqrt[7]8$ and $\zeta=\zeta_7$. Show that
>
> $$
> K=\mathbb Q(\alpha,\zeta),
> $$
>
> and compute the degree using $[\mathbb Q(\alpha):\mathbb Q]=7$ and $[\mathbb Q(\zeta):\mathbb Q]=6$.

> [!hint]- Hint 2
> Since $3$ generates $(\mathbb Z/7\mathbb Z)^\times$, define automorphisms by
>
> $$
> \sigma(\alpha)=\zeta\alpha,
> \qquad
> \sigma(\zeta)=\zeta,
> $$
>
> and
>
> $$
> \tau(\alpha)=\alpha,
> \qquad
> \tau(\zeta)=\zeta^3.
> $$

> [!hint]- Hint 3
> Compute $\tau\sigma\tau^{-1}$ on both generators. A direct product would require the two subgroup generators to commute.

## Solution

> [!success]- Solution
> Let
>
> $$
> \alpha=\sqrt[7]8>0,
> \qquad
> \zeta=e^{2\pi i/7}.
> $$
>
> The seven roots of $x^7-8$ are
>
> $$
> \alpha,\zeta\alpha,\ldots,\zeta^6\alpha,
> $$
>
> so its splitting field is the compositum
>
> $$
> K=\mathbb Q(\alpha,\zeta)
> =\mathbb Q(\alpha)\mathbb Q(\zeta).
> $$
>
> Although $x^7-8$ is not Eisenstein at $2$, the degree of $\alpha$ is still $7$. Indeed,
>
> $$
> \alpha^5=4\sqrt[7]2,
> $$
>
> and hence $\mathbb Q(\alpha)=\mathbb Q(\sqrt[7]2)$. The polynomial $x^7-2$ is Eisenstein at $2$, so
>
> $$
> [\mathbb Q(\alpha):\mathbb Q]=7.
> $$
>
> Cyclotomic theory gives
>
> $$
> [\mathbb Q(\zeta):\mathbb Q]=\varphi(7)=6.
> $$
>
> The degree of $\mathbb Q(\alpha)\cap\mathbb Q(\zeta)$ over $\mathbb Q$ divides both $7$ and $6$, and is therefore $1$. Thus
>
> $$
> \mathbb Q(\alpha)\cap\mathbb Q(\zeta)=\mathbb Q,
> \qquad
> [K:\mathbb Q]=7\cdot6=42.
> $$
>
> Since $[K:\mathbb Q(\zeta)]=7$, the minimal polynomial of $\alpha$ over $\mathbb Q(\zeta)$ is $x^7-8$. Hence the assignment $\alpha\mapsto\zeta\alpha$ defines an automorphism of $K$ fixing $\mathbb Q(\zeta)$. Similarly, $[K:\mathbb Q(\alpha)]=6$, so the cyclotomic automorphism $\zeta\mapsto\zeta^3$ extends while fixing $\alpha$. Thus define
>
> $$
> \sigma(\alpha)=\zeta\alpha,
> \qquad
> \sigma(\zeta)=\zeta,
> $$
>
> and
>
> $$
> \tau(\alpha)=\alpha,
> \qquad
> \tau(\zeta)=\zeta^3.
> $$
>
> The map $\sigma$ has order $7$. Since $3$ has multiplicative order $6$ modulo $7$, the map $\tau$ has order $6$. Moreover,
>
> $$
> \langle\sigma\rangle
> =\operatorname{Gal}(K/\mathbb Q(\zeta))
> \cong C_7,
> $$
>
> while
>
> $$
> \langle\tau\rangle
> =\operatorname{Gal}(K/\mathbb Q(\alpha))
> \cong C_6.
> $$
>
> These subgroups intersect trivially, and the product of their orders is $42=|\operatorname{Gal}(K/\mathbb Q)|$. Hence they generate the full group. The decisive point is their conjugation relation. Since $\tau^{-1}(\alpha)=\alpha$, one obtains
>
> $$
> \tau\sigma\tau^{-1}(\alpha)
> =\tau\sigma(\alpha)
> =\tau(\zeta\alpha)
> =\zeta^3\alpha
> =\sigma^3(\alpha).
> $$
>
> Also, because $\sigma$ fixes $\zeta$,
>
> $$
> \tau\sigma\tau^{-1}(\zeta)=\zeta=\sigma^3(\zeta).
> $$
>
> Therefore
>
> $$
> \tau\sigma\tau^{-1}=\sigma^3.
> $$
>
> Since $\sigma^3\ne\sigma$, the two generators do not commute. Consequently
>
> $$
> \operatorname{Gal}(K/\mathbb Q)
> \cong C_7\rtimes_3 C_6,
> $$
>
> where a generator of $C_6$ acts on $C_7$ by $\sigma\mapsto\sigma^3$. Equivalently,
>
> $$
> \operatorname{Gal}(K/\mathbb Q)
> \cong \operatorname{AGL}_1(\mathbb F_7),
> $$
>
> the affine group of maps $x\mapsto ax+b$ on $\mathbb F_7$. This group is nonabelian, so it is neither cyclic nor the direct product $C_7\times C_6$.

## Why the Direct-Product Argument Fails

The cyclotomic factor $\mathbb Q(\zeta)/\mathbb Q$ is Galois. Therefore

$$
\operatorname{Gal}(K/\mathbb Q(\zeta))=\langle\sigma\rangle
$$

is normal in $\operatorname{Gal}(K/\mathbb Q)$. By contrast, the radical factor $\mathbb Q(\alpha)/\mathbb Q$ is not Galois: it is contained in $\mathbb R$, whereas the nonreal conjugates $\zeta^i\alpha$ do not lie in it. Consequently

$$
\operatorname{Gal}(K/\mathbb Q(\alpha))=\langle\tau\rangle
$$

is not normal. Two complementary subgroups give an internal semidirect product when only one is normal; an internal direct product requires both to be normal, equivalently that the two factors commute elementwise.

## Related Concepts

- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Normal Subgroups and Extensions|Normal Subgroups and Extensions]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Related Exercises

- [[05 - Galois Theory/Exercises/Exercise Gal72 - Composita and Semidirect Products|Exercise Gal72: Composita and Semidirect Products]]

## Notes

- **Source statement:** Yu Pin, *Groups and Galois Theory* (《群与 Galois 理论》), §5.6.2, Example 5.26, printed p. 184, physical PDF p. 184.
- **Source issue:** The source's degree calculation and subgroup orders are retained, but its cyclic/direct-product conclusion is explicitly rejected.
- **Proof status:** The corrected group calculation above is an independent derivation in this vault. The imported standard inputs are Eisenstein's criterion, the degree of a cyclotomic field, and the normal-subgroup criterion in the Fundamental Theorem of Galois Theory.
- No source image is retained because the original page contains only searchable text, formulas, and a field diagram that is not needed to solve the problem.
