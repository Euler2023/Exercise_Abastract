---
title: Ideal Classes and Class Groups
aliases:
  - Ideal Class Group
  - Class Group of a Quadratic Integer Ring
topic: ring-theory
tags:
  - concept
  - ring-theory
  - ideals
  - class-groups
created: 2026-08-28
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, §§13.7–13.8, printed pp. 395–402, PDF pp. 407–414; Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §6, printed pp. 34–36, PDF pp. 53–55"
source_status: partially-verified
status: not-started
---

# Ideal Classes and Class Groups

## General Number-Field Definition

Let $K$ be any number field and $\mathcal O_K$ its ring of integers. The nonzero fractional ideals form an abelian group $J_K$ under multiplication because $\mathcal O_K$ is Dedekind. Its subgroup $P_K$ consists of the principal fractional ideals $(x)$ with $x\in K^\times$. The **ideal class group** is

$$
\operatorname{Cl}(K)=J_K/P_K.
$$

Thus $[\mathfrak a]=[\mathfrak b]$ exactly when $\mathfrak a=x\mathfrak b$ for some $x\in K^\times$. Every class has an integral representative, obtained by clearing denominators; its identity is the class of $\mathcal O_K$, consisting exactly of principal ideals. For number-field integer rings, triviality of this group is equivalent to every integral ideal being principal. The imaginary-quadratic similarity interpretation below is a specialization of this general definition. [S4, Ch. I, §6, Theorem (6.3), printed p. 36, PDF p. 55]

## Absolute Ideal Norm and Class Number

For a nonzero integral ideal, define $\mathfrak N(\mathfrak a)=[\mathcal O_K:\mathfrak a]$. This is a finite positive integer. If $\mathfrak p\cap\mathbb Z=(p)$ and $[\mathcal O_K/\mathfrak p:\mathbb F_p]=f$, then $\mathfrak N(\mathfrak p)=p^f$. Proposition (6.1) proves

$$
\mathfrak N\left(\prod_{\mathfrak p}\mathfrak p^{v_{\mathfrak p}}\right)
=\prod_{\mathfrak p}\mathfrak N(\mathfrak p)^{v_{\mathfrak p}},
\qquad
\mathfrak N((x))=|N_{K/\mathbb Q}(x)|.
$$

Allowing integer exponents extends the norm multiplicatively to nonzero fractional ideals, with positive rational values. The source proves the integral formula by Chinese remainders and the one-dimensional residue spaces $\mathfrak p^i/\mathfrak p^{i+1}$. [S4, Ch. I, §6, Proposition (6.1) and principal-ideal formula, printed p. 35, PDF p. 54]

Only finitely many integral ideals have norm at most any given bound: their prime divisors lie above finitely many rational primes, there are finitely many primes above each, and their nonnegative exponents are bounded by their norm contributions. Combined with a uniform bound on class representatives, this proves that $\operatorname{Cl}(K)$ is finite. Its order is the **class number** $h_K$. Neukirch gives this proof in (6.3). [S4, Ch. I, §6, printed p. 36, PDF p. 55]

For degree $n=r+2s$, the sharper representative bound posed in Exercise I.6.3 is

$$
\mathfrak N(\mathfrak a)\le
M_K=\frac{n!}{n^n}\left(\frac4\pi\right)^s\sqrt{|d_K|}.
$$

Its complete independent proof is in [[02 - Ring Theory/Exercises/Exercise R347 - The Minkowski Bound for Ideal Class Representatives|the Minkowski class-representative exercise]]. It applies I.5.3 to an integral representative $\mathfrak b$ of the inverse class, then takes $(\alpha)\mathfrak b^{-1}$; this is integral because $\alpha\in\mathfrak b$. This sharper exercise solution is distinct from the source-written proof of (6.3), which uses a weaker constant. The bound makes small class-number calculations into finite ideal-norm checks; it does not make an impossible discriminant entry valid.

## Imaginary Quadratic Interpretation

Let $R$ be the ring of integers in an imaginary quadratic number field. Two nonzero ideals $A$ and $A'$ are **similar** if

$$
A'=\lambda A
$$

for some nonzero complex number $\lambda$. The scalar necessarily belongs to the ambient quadratic field. Similarity is an equivalence relation, and its equivalence classes are the **ideal classes**.

Geometrically, multiplication by $\lambda$ rotates and scales the ideal lattice without reversing orientation. Thus an ideal class is also an orientation-preserving lattice-similarity type.

## Class-Group Operation

Ideal multiplication descends to classes:

$$
[A][B]=[AB].
$$

This is well defined because $(\lambda A)(\mu B)=\lambda\mu AB$. The class of the unit ideal $R$ is the identity and consists exactly of the principal ideals.

The conjugate ideal supplies an inverse. The Main Lemma gives

$$
A\overline A=(n)
$$

for some positive integer $n$, so

$$
[A]^{-1}=[\overline A].
$$

The resulting abelian group is the **ideal class group**, denoted $\operatorname{Cl}(R)$.

## Key Consequences

> [!abstract] Principality and unique factorization
> For the ring of integers in an imaginary quadratic field, the following are equivalent:
>
> 1. $\operatorname{Cl}(R)$ is trivial;
> 2. every nonzero ideal is principal;
> 3. $R$ is a principal ideal domain;
> 4. $R$ is a unique factorization domain.

> [!tip] Computing a class group
> Bound the norms of ideal-class representatives, factor the relevant small rational-prime ideals, and record relations arising from principal ideals $(\alpha)$. Conjugate prime factors represent inverse classes.

## Examples

For $R=\mathbb Z[\sqrt{-5}]$, the ideal $P=(2,1+\sqrt{-5})$ is nonprincipal and satisfies $P^2=(2)$. Every ideal is similar either to $R$ or to $P$, so

$$
\operatorname{Cl}(R)\cong\mathbb Z/2\mathbb Z.
$$

For $R=\mathbb Z[\sqrt{-6}]$, the ideals $P=(2,\sqrt{-6})$ and $Q=(3,\sqrt{-6})$ satisfy

$$
P^2=(2),
\qquad
Q^2=(3),
\qquad
PQ=(\sqrt{-6}).
$$

They represent the same nontrivial class, again giving a class group of order two.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Minkowski Lattices]]

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The similarity relation, class-group operation, conjugate inverse, and principality criterion were checked against [S1, Ch. 13, §§13.7–13.8, printed pp. 395–402, PDF pp. 407–414]. The two order-two examples are independently verified from the displayed ideal products and the ideal-shape classification in this vault.

The general ideal-class definition, multiplicative norm and source finiteness proof above were checked against Neukirch I §6; their source anchors are given at each statement. The sharper bound and the class-number computations remain independently derived exercise solutions. Existing source-status and learning-status metadata are retained.
