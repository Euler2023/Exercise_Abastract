---
title: Isotypic Components and Clifford Theory
aliases:
  - Isotypic Decomposition
  - Multiplicity Spaces
  - Inertia Groups of Characters
topic: representation-theory
tags:
  - concept
  - representation-theory
  - clifford-theory
created: 2026-09-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Proposition 5.14 and Theorems 5.15 and 5.17, printed pp. 684-685, PDF pp. 699-700; Exercises 4-7, printed pp. 723-724, PDF pp. 738-739"
source_status: verified-with-corrections
status: not-started
---

# Isotypic Components and Clifford Theory

## Definition

Let $G$ be a finite group and $E$ a finite-dimensional complex representation. For a simple $G$-module $V_\chi$ with character $\chi$, the **isotypic component** $E_\chi$ is the sum of all simple submodules of $E$ isomorphic to $V_\chi$. The **multiplicity space** is

$$
M_\chi=\operatorname{Hom}_{\mathbb C[G]}(V_\chi,E).
$$

Maschke's theorem and Schur's lemma give the canonical evaluation decomposition

$$
E=\bigoplus_{\chi\in\operatorname{Irr}(G)}E_\chi,\qquad
E_\chi\cong V_\chi\otimes_{\mathbb C}M_\chi,\qquad
v\otimes f\longmapsto f(v).
$$

Here $G$ acts on the first tensor factor and trivially on $M_\chi$. Thus $m_\chi=\dim M_\chi$ is the multiplicity of $V_\chi$, while $\dim E_\chi=\chi(1)m_\chi$. An isotypic representation can have multiplicity greater than one and need not be irreducible.

For a normal subgroup $S\triangleleft G$ and a simple character $\psi$ of $S$, define

$$
[g]\psi(s)=\psi(g^{-1}sg),\qquad
I_G(\psi)=\{g\in G:[g]\psi=\psi\}.
$$

The subgroup $I_G(\psi)$ is the **inertia group** of $\psi$. It contains $S$, since characters are invariant under inner conjugation.

## Intuition

An arbitrary direct-sum decomposition into simple subspaces is usually not canonical: repeated copies can be mixed by an equivariant automorphism. Grouping all copies of the same simple type produces canonical subspaces. When restricting an irreducible representation to a normal subgroup, the larger group permutes these subspaces. Their stabilizer identifies the subgroup from which the original representation is induced.

Multiplicity spaces separate the fixed simple model from how many times it occurs. A commuting operator acts on that multiplicity space; its determinant on the entire isotypic component contains an additional power equal to the simple degree.

## Key Properties

### Why the decomposition exists and is canonical

Maschke's theorem can be obtained by averaging: for an invariant subspace $W\subset E$, average any linear projection $p:E\to W$ to

$$
\overline p=\frac1{|G|}\sum_{g\in G}gpg^{-1}.
$$

This is $G$-equivariant and still the identity on $W$. Its kernel is an invariant complement. Repeating gives complete reducibility.

Schur's lemma says that a nonzero map between simple modules is an isomorphism, by considering its kernel and image. A commuting endomorphism of a complex simple module is scalar: choose an eigenvalue, and the nonzero kernel of its difference from that scalar is invariant.

Choose a decomposition of $E$ into simple summands. Projecting any simple submodule of type $\chi$ onto a summand of a different type gives zero by Schur's lemma. Hence it lies in the sum of the chosen copies of $V_\chi$. This identifies that sum with the intrinsic $E_\chi$, independently of the choice. On $m_\chi$ copies, the evaluation map becomes the direct sum of $m_\chi$ identity maps, proving the displayed tensor description.

### Central character projectors

Put $d_\chi=\chi(1)$. The element

$$
e_\chi=\frac{d_\chi}{|G|}
\sum_{g\in G}\chi(g^{-1})g\in\mathbb C[G]
$$

acts on every $E$ as the projector onto $E_\chi$. Its coefficients are constant on conjugacy classes, so it is central and acts as a scalar on each simple $V_\eta$. The trace of that scalar operator is

$$
\frac{d_\chi}{|G|}\sum_{g\in G}\chi(g^{-1})\eta(g)
=d_\chi\delta_{\chi,\eta}.
$$

The orthogonality identity used here has an algebraic proof. Write $\rho_\chi,\rho_\eta$ for the two representations and average the action $T\mapsto\rho_\eta(g)T\rho_\chi(g^{-1})$ on $\operatorname{Hom}_{\mathbb C}(V_\chi,V_\eta)$. Its image is the equivariant Hom space, of dimension $\delta_{\chi,\eta}$. The trace of each summand is the product of the two characters, and the trace of the resulting idempotent is the dimension of its image. This proves the identity. Dividing the displayed scalar trace by $\dim V_\eta$ gives scalar $1$ for $\eta=\chi$ and $0$ otherwise.

Consequently $e_\chi^2=e_\chi$, the distinct projectors are orthogonal, and $\sum_\chi e_\chi=1$. Every invariant subspace is preserved by them and decomposes into its intersections with the isotypic components.

### Commuting operators act on multiplicity spaces

If $T:E\to E$ commutes with $G$, it preserves all $E_\chi$ and acts on $M_\chi$ by $f\mapsto T\circ f$, denoted $T_\chi$. Evaluation intertwines $T$ with $1\otimes T_\chi$. Hence

$$
\operatorname{tr}(T\mid E_\chi)=d_\chi\operatorname{tr}(T_\chi),\qquad
\det(1-tT\mid E_\chi)=\det(1-tT_\chi)^{d_\chi}.
$$

This distinction is necessary in the corrected character-determinant formalism of Lang XVIII.26.

### Restriction to a normal subgroup

Suppose now that $E$ is irreducible for $G$. Decompose its restriction as

$$
\operatorname{Res}_S^GE=\bigoplus_{\psi\in\Omega}E_\psi.
$$

Normality gives $gE_\psi=E_{[g]\psi}$. The sum over each orbit is $G$-stable, so irreducibility implies that $\Omega$ is one orbit. In particular the constituent degrees and multiplicities are constant along it.

Fix $\psi\in\Omega$ and let $I=I_G(\psi)$. The component $E_\psi$ is irreducible as an $I$-module. To prove this, let $0\ne U\subseteq E_\psi$ be $I$-stable and choose coset representatives $t$ for $G/I$. The sum $\bigoplus_t tU$ is direct because its summands lie in distinct isotypic components. It is $G$-stable, by writing $gt=t'i$ with $i\in I$, so it equals $E$. Its intersection with $E_\psi$ is $U$, proving $U=E_\psi$.

The evaluation map then gives

$$
\operatorname{Ind}_I^G E_\psi
=\mathbb C[G]\otimes_{\mathbb C[I]}E_\psi
\xrightarrow{\ \sim\ } E,\qquad
g\otimes v\longmapsto gv.
$$

It is an isomorphism because its coset summands map isomorphically onto the distinct isotypic components. If more than one type occurs, $I$ is proper. The inducing module is the whole component, not a chosen simple $S$-constituent; no extension of that constituent to $I$ is presumed.

### Irreducibility of induction from a normal subgroup

For a simple $S$-module $U_\psi$, restriction of its induced module is the sum of the conjugate modules indexed by $G/S$. The induction–restriction Hom adjunction and Schur's lemma give

$$
\dim_{\mathbb C}\operatorname{End}_G
(\operatorname{Ind}_S^G U_\psi)=[I_G(\psi):S].
$$

The adjunction sends a map on the induced module to its restriction to $1\otimes U_\psi$; its inverse sends $f$ to $g\otimes u\mapsto gf(u)$. Thus the formula follows by counting the summands with character $\psi$. A nonzero complex semisimple module has endomorphism dimension one exactly when it is simple. Therefore

$$
\operatorname{Ind}_S^G\psi\text{ is irreducible}
\quad\Longleftrightarrow\quad I_G(\psi)=S.
$$

The printed condition in XVIII.4, invariance under conjugation by elements of $S$, is automatic and cannot serve as this criterion.

## Examples

> [!example] The standard representation of $S_3$
> On restriction to $A_3\cong C_3$, the standard complex module is the sum of two distinct one-dimensional characters $\omega,\omega^{-1}$. A transposition exchanges their lines. The inertia group of either character is $A_3$, and inducing either one gives the same irreducible two-dimensional $S_3$-module.

> [!example] An isotypic component with multiplicity
> Let $V_\chi$ be a two-dimensional simple module and $E=V_\chi\oplus V_\chi\oplus V_\chi$. There is just one isotypic component, of dimension $6$, but its multiplicity space has dimension $3$. If a commuting map corresponds to $A\in\operatorname{Mat}_3(\mathbb C)$, its reversed determinant on $E$ is $\det(I_3-tA)^2$.

For $G=A\rtimes H$ with $A$ finite abelian, the isotypic components for $A$ are ordinary weight spaces. If $H_\psi$ stabilizes a weight, that weight extends to $AH_\psi$ by $\widetilde\psi(ah)=\psi(a)$. Tensoring this extension with irreducibles of $H_\psi$ and inducing gives all irreducibles of $G$, without repetitions except for the chosen orbit representatives. The construction and completeness proof are supplied in the linked XVIII.7 exercise.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced Representations and Frobenius Reciprocity]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]
- [[06 - Representation Theory/Concepts/Character Rings and Adams Operations|Character Rings and Adams Operations]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The source statements and the defective criterion were checked on [S2, Ch. XVIII, Exercises 4–7, printed pp. 723–724, PDF pp. 738–739]. The isotypic restriction, inertia, and induction arguments above are independent derivations; they are not attributed to solutions printed in the source.
- The central projectors and character inputs were checked at [S2, Ch. XVIII, Proposition 5.14 and Theorems 5.15, 5.17, printed pp. 684–685, PDF pp. 699–700]. Maschke's theorem is at Ch. XVIII, Theorem 1.2, printed pp. 666–667, PDF pp. 681–682. The relevant averaging and Schur arguments are also supplied above.
- All assertions here are stated for finite groups and finite-dimensional complex representations. The algebraic proofs of the decomposition, projectors, and multiplicity-space determinant identities also work over any algebraically closed field of characteristic zero, as used in XVIII.26: averaging, Schur's eigenvalue argument, and trace identities still apply. No Hermitian inner product is needed for that extension.
- Over a nonsplitting field, simple endomorphism rings may be nontrivial division algebras; the displayed tensor decomposition and scalar central-character formula require modification. In characteristic dividing the group order, complete reducibility can fail altogether.
