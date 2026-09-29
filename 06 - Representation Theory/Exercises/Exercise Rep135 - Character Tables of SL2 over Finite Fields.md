---
title: "Exercise Rep135: Character Tables of SL2 over Finite Fields"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
  - character-tables
  - finite-fields
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 11, printed p. 725, PDF p. 740"
created: 2026-09-29
---

# Exercise Rep135: Character Tables of SL2 over Finite Fields

## Problem Statement

> [!question] Lang, Chapter XVIII, Exercise 11
> Determine all simple characters of $SL_2(F)$, giving a table for the number of such characters, representatives for the conjugacy classes, as was done in the text for $GL_2$, over the complex numbers.

Here $F=\mathbb F_q$ is a finite field, as in the preceding exercise. All characters in this note are ordinary complex characters. The answer includes both even and odd $q$, including $q=2$ and $q=3$.

## Hints

> [!hint]- Hint 1: Compare conjugacy and restriction from $GL_2$
> Put $G=SL_2(F)$ and $H=GL_2(F)$. A regular semisimple $H$-class in $G$ remains one $G$-class, because the determinant maps its $H$-centralizer onto $F^\times$. A noncentral unipotent class splits into two classes when $q$ is odd. For characters of $H$, sum their inner products after twisting by every character of $H/G\cong F^\times$.

> [!hint]- Hint 2: Determine the exceptional rows without constructing new models
> The restrictions of the principal and cuspidal $GL_2$ characters have norm one except at their nontrivial quadratic torus parameters, where they have norm two. Each exceptional restriction therefore splits into two distinct constituents, exchanged by conjugation with a matrix of nonsquare determinant. Their difference vanishes on every class except the unipotent classes. Orthogonality determines the absolute value of that difference, and the inverse-class relation determines its square.

## Solution

> [!success]- Complete tables and independent restriction argument
> **Notation and class representatives.** Let $K=\mathbb F_{q^2}$ and let
>
> $$
> T=\{b\in K^\times:b^{q+1}=1\},\qquad
> Z=\{z\in F^\times:z^2=1\},\qquad d=\#Z=\gcd(2,q-1).
> $$
>
> The cyclic groups $F^\times$ and $T$ have orders $q-1$ and $q+1$. Their intersection in $K$ is $Z$. Write
>
> $$
> u_s=\begin{pmatrix}1&s\\0&1\end{pmatrix},\qquad
> h_a=\begin{pmatrix}a&0\\0&a^{-1}\end{pmatrix},\qquad
> c_b=\begin{pmatrix}0&-1\\1&b+b^{-1}\end{pmatrix}.
> $$
>
> In the last formula $b\in T\setminus Z$, so $b+b^{-1}\in F$, and the characteristic polynomial of $c_b$ is irreducible over $F$. The representatives and class sizes are as follows. In the two last rows identify a parameter with its inverse.
>
> | Type | Representatives and parameter range | Number of classes | Size of each class |
> |---|---|---:|---:|
> | Central | $zI$, $z\in Z$ | $d$ | $1$ |
> | Noncentral repeated-root | $zu_s$, $z\in Z$, $s\in F^\times/(F^\times)^2$ | $d^2$ | $(q^2-1)/d$ |
> | Split regular semisimple | $h_a$, $a\in F^\times\setminus Z$, $a\sim a^{-1}$ | $(q-1-d)/2$ | $q(q+1)$ |
> | Nonsplit regular semisimple | $c_b$, $b\in T\setminus Z$, $b\sim b^{-1}$ | $(q+1-d)/2$ | $q(q-1)$ |
>
> Thus the number of classes is $q+d^2$: it is $q+1$ for even $q$ and $q+4$ for odd $q$. The group order is $q(q^2-1)$: its first column can be any nonzero vector, and there are $q$ second columns having determinant one with it.
>
> We justify the class table before listing the characters. The characteristic polynomial and Jordan form over a splitting field separate the four types. For $h_a$, the $H$-centralizer is the split diagonal torus, with determinant surjective onto $F^\times$; its intersection with $G$ has order $q-1$. For $c_b$, the $H$-centralizer is $K^\times$, acting by multiplication on the two-dimensional $F$-space $K$. Its determinant is the surjective norm $K^\times\to F^\times$, and its intersection with $G$ is $T$, of order $q+1$. Surjectivity of these determinant maps lets us adjust any $H$-conjugating matrix by a centralizing matrix to give determinant one. Hence each such $H$-class remains one $G$-class, and its size is the stated centralizer index. Its eigenvalue pair determines the parameter up to inversion.
>
> For $u_s$, the centralizer in $H$ consists of matrices $\begin{pmatrix}x&y\\0&x\end{pmatrix}$ with $x\ne0$. Its determinant image is $(F^\times)^2$, and its intersection with $G$ has order $dq$. Moreover, a determinant-one matrix conjugating $u_s$ to $u_t$ must preserve their unique eigenline and has the form $\begin{pmatrix}x&y\\0&x^{-1}\end{pmatrix}$. Conjugation gives $t=x^2s$. Conversely this formula supplies a conjugating matrix whenever $t/s$ is a square. This proves the repeated-root row and exhausts the Jordan possibilities.
>
> **Character table for even $q$.** Here $Z=\{1\}$ and every nonzero element of $F$ is a square. Let $\alpha$ run through the nontrivial characters of $F^\times$, modulo $\alpha\sim\alpha^{-1}$, and let $\beta$ run through the nontrivial characters of $T$, modulo inversion. Both torus orders are odd, so these inversion orbits have size two.
>
> | Character | Number of such rows | $I$ | $u_1$ | $h_a$ | $c_b$ |
> |---|---:|---:|---:|---|---|
> | $1$ | $1$ | $1$ | $1$ | $1$ | $1$ |
> | $\mathrm{St}$ | $1$ | $q$ | $0$ | $1$ | $-1$ |
> | $P_\alpha$ | $(q-2)/2$ | $q+1$ | $1$ | $\alpha(a)+\alpha(a)^{-1}$ | $0$ |
> | $C_\beta$ | $q/2$ | $q-1$ | $-1$ | $0$ | $-\beta(b)-\beta(b)^{-1}$ |
>
> **Character table for odd $q$.** Let $\eta$ be the nontrivial quadratic character of $F^\times$ and $\nu$ the nontrivial quadratic character of $T$. Set
>
> $$
> \delta=\eta(-1)=(-1)^{(q-1)/2},\qquad
> \tau^2=\delta q.
> $$
>
> Choose either square root $\tau$ once and for all. The labels $+$ and $-$ within each exceptional pair are chosen accordingly. We have $\nu(-1)=-\delta$. The parameters for $P_\alpha$ satisfy $\alpha\notin\{1,\eta\}$, and those for $C_\beta$ satisfy $\beta\notin\{1,\nu\}$; in both cases identify a character with its inverse. For the repeated-root columns take $s=1$ and one fixed nonsquare, so $\eta(s)=1$ and $-1$, respectively.
>
> | Character | Number of such rows | $zI$ | $zu_s$ | $h_a$ | $c_b$ |
> |---|---:|---|---|---|---|
> | $1$ | $1$ | $1$ | $1$ | $1$ | $1$ |
> | $\mathrm{St}$ | $1$ | $q$ | $0$ | $1$ | $-1$ |
> | $P_\alpha$ | $(q-3)/2$ | $(q+1)\alpha(z)$ | $\alpha(z)$ | $\alpha(a)+\alpha(a)^{-1}$ | $0$ |
> | $C_\beta$ | $(q-1)/2$ | $(q-1)\beta(z)$ | $-\beta(z)$ | $0$ | $-\beta(b)-\beta(b)^{-1}$ |
> | $W_+,W_-$ | $2$ | $\frac{q+1}{2}\eta(z)$ | $\frac{\eta(z)}2(1\pm\eta(s)\tau)$ | $\eta(a)$ | $0$ |
> | $X_+,X_-$ | $2$ | $\frac{q-1}{2}\nu(z)$ | $\frac{\nu(z)}2(-1\pm\eta(s)\tau)$ | $0$ | $-\nu(b)$ |
>
> In particular, the last two pairs have degrees $(q+1)/2$ and $(q-1)/2$, respectively. Each sign gives one row, with the same sign used throughout that row.
>
> **The precise $GL_2$ input.** We use the following already-established results from the text for $H=GL_2(F)$: Theorem 12.6 [printed p. 722, PDF p. 737] and the values in Tables 12.5(II), (III), and (IV) [printed pp. 717, 719, 721, PDF pp. 732, 734, 736]. They provide the following irreducible characters, with no identifications except the stated ones:
>
> - $L_\mu=\mu\circ\det$, of degree $1$, for $\mu\in\widehat{F^\times}$;
> - $\widetilde{\mathrm{St}}\,L_\mu$, of degree $q$;
> - $\widetilde P_{\lambda,\mu}$, of degree $q+1$, for $\lambda\ne\mu$, with $(\lambda,\mu)$ identified with $(\mu,\lambda)$;
> - $\widetilde C_\theta$, of degree $q-1$, for $\theta\in\widehat{K^\times}$ with $\theta\ne\theta^q$, with $\theta$ identified with $\theta^q$.
>
> Here $\theta^q(x)=\theta(x^q)$. The principal characters are induced from the upper triangular subgroup with diagonal character $\lambda(a)\mu(d)$. The source constructs the last family as a difference of induced characters and proves it irreducible. We import these $GL_2$ results, not an external classification of $SL_2$ characters.
>
> The tables also give the determinant-twist rules
>
> $$
> \widetilde P_{\lambda,\mu}L_\gamma
> =\widetilde P_{\lambda\gamma,\mu\gamma},\qquad
> \widetilde C_\theta L_\gamma
> =\widetilde C_{\theta(\gamma\circ N_{K/F})}.
> $$
>
> The first follows either from induction or the displayed source values; the second follows by multiplying the source values in each of its four class types. These formulas retain the parametrization identifications above.
>
> **A restriction identity.** If $\chi,\psi$ are characters of $H$, then
>
> $$
> \langle\chi|_G,\psi|_G\rangle_G
> =\sum_{\gamma\in\widehat{F^\times}}
> \langle\chi,\psi L_\gamma\rangle_H.
> $$
>
> Indeed, expand the right-hand inner products as sums over $H$. For $h\in H$, the sum $\sum_\gamma\overline{\gamma(\det h)}$ is $q-1$ if $\det h=1$ and zero otherwise, by character orthogonality on the cyclic group $F^\times$. The remaining average is precisely the left side. Thus a restricted irreducible character has squared norm equal to the number of determinant twists fixing its $H$-isomorphism class. Restrictions of two such characters have disjoint constituents unless the $H$-characters are determinant twists of one another.
>
> **Ordinary principal and cuspidal rows.** Restrict $\widetilde P_{\alpha,1}$ for $\alpha\ne1$. A twist fixes it exactly when
>
> $$
> \{\alpha\gamma,\gamma\}=\{\alpha,1\}.
> $$
>
> The identity matching gives $\gamma=1$; the swapped matching gives $\gamma=\alpha$ and requires $\alpha^2=1$. Consequently the restriction is irreducible unless $q$ is odd and $\alpha=\eta$, when its squared norm is two. Two such restrictions overlap exactly when their parameters are inverse or equal. Substituting determinant-one representatives into the source principal table gives the values listed above, including the values of the sum $W_++W_-$ when $\alpha=\eta$.
>
> For each $1\ne\beta\in\widehat T$, choose an extension $\theta\in\widehat{K^\times}$; it exists because $K^\times$ is cyclic. Its Frobenius conjugate restricts to $\beta^{-1}$. A Frobenius-invariant character of $K^\times$ factors through the norm: in a cyclic group of order $(q-1)(q+1)$, the condition $\theta^{q-1}=1$ says its exponent is divisible by $q+1$. It is therefore trivial on $T$. Our extension, with nontrivial restriction $\beta$, satisfies $\theta\ne\theta^q$ and defines an irreducible $\widetilde C_\theta$.
>
> Any two extensions of $\beta$ differ by $\gamma\circ N_{K/F}$, because $K^\times/T\cong F^\times$. They therefore have the same restriction to $G$. A determinant twist fixes $\widetilde C_\theta$ either by leaving $\theta$ unchanged, which forces $\gamma=1$, or by making it $\theta^q$. The second possibility occurs precisely when $\beta^2=1$: the ratio $\theta^q/\theta$ is then trivial on $T$ and factors uniquely through the norm. The resulting $\gamma$ is nontrivial, since $\theta^q\ne\theta$. Hence the restriction is irreducible except at the nontrivial quadratic $\beta=\nu$ for odd $q$, where its squared norm is two. The same twist rule shows that the only coincidences are $\beta\sim\beta^{-1}$.
>
> Substitution in the source cuspidal table gives the $C_\beta$ row above and, at $\beta=\nu$, the sum $X_++X_-$. Restricting the linear family gives $1$; restricting the Steinberg family gives the displayed $\mathrm{St}$ row, whose norm is one since its $H$-characters have no nontrivial determinant self-twist. Different source families cannot be determinant twists of one another, so all the restricted families have disjoint constituents.
>
> **Splitting and the exceptional degrees.** In odd characteristic the two exceptional restricted characters are genuine characters of squared norm two. Complete reducibility and character orthogonality show that each is a sum of two distinct irreducibles, each with multiplicity one: the squares of its nonnegative integer multiplicities sum to two.
>
> The $H$-action permutes the $G$-isotypic subspaces in either underlying irreducible $H$-representation. It does so transitively, since the sum of the subspaces in an orbit would otherwise be a proper nonzero $H$-submodule. The two constituents therefore have equal dimensions. Their degrees are respectively $(q+1)/2$ and $(q-1)/2$. Conjugation by $G$ fixes each character, so the permutation of the pair factors through $H/G\cong F^\times$. Its nontrivial two-element action has kernel $(F^\times)^2$. Thus every matrix of nonsquare determinant exchanges the two constituents.
>
> **Derivation of the square roots in the table.** Let $\Delta$ be the difference of the two characters in either exceptional pair. On each central or regular semisimple $G$-class, conjugation by $H$ fixes the class, as proved above. Since a nonsquare determinant exchanges the two constituents, their values agree on those classes, and $\Delta$ vanishes there. Each constituent consequently has half of the known restricted value on those classes.
>
> Write $\omega=\eta$ for the principal pair and $\omega=\nu$ for the cuspidal pair. The scalar matrix $zI$ acts in the parent irreducible $H$-representation by $\omega(z)$, as follows from its central character. It has the same scalar action on both $G$-constituents. Conjugation by $\operatorname{diag}(t,1)$ sends $u_s$ to $u_{ts}$ and exchanges the pair exactly when $t$ is a nonsquare. Hence, with $c=\Delta(u_1)$,
>
> $$
> \Delta(zu_s)=\omega(z)\eta(s)c.
> $$
>
> The two constituents are orthogonal and each has norm one, so $\langle\Delta,\Delta\rangle_G=2$. There are four repeated-root classes, each of size $(q^2-1)/2$. Thus
>
> $$
> 2=\frac{4\,(q^2-1)\,\lvert c\rvert^2/2}{q(q^2-1)}
> =\frac{2\lvert c\rvert^2}{q},
> \qquad\lvert c\rvert^2=q.
> $$
>
> Every complex character satisfies $\chi(g^{-1})=\overline{\chi(g)}$. Since $u_1^{-1}=u_{-1}$, we obtain $\overline c=\delta c$, and therefore $c^2=\delta q$. Exchanging the names of the two constituents if necessary makes $c=\tau$. Their known sum at $zu_s$ is $\eta(z)$ in the principal case and $-\nu(z)$ in the cuspidal case. Adding and subtracting $\Delta$ yields exactly the two exceptional rows of the table. This determines the phases as well as the magnitudes, without any unproved Gauss-sum or Weil-representation formula.
>
> **Completeness and small fields.** For even $q$, the number of distinct irreducibles just constructed is
>
> $$
> 2+\frac{q-2}{2}+\frac q2=q+1.
> $$
>
> For odd $q$, it is
>
> $$
> 2+\frac{q-3}{2}+\frac{q-1}{2}+2+2=q+4.
> $$
>
> Each equals the proved number of conjugacy classes. The character theorem that irreducible complex characters form an orthonormal basis of the class functions therefore proves that the lists are complete.
>
> At $q=2$, the principal family is empty and the single cuspidal row has degree one. The class sizes are $1,3,2$ and the complete table reduces to
>
> | Character | $I$ | $u_1$ | $c_b$ |
> |---|---:|---:|---:|
> | $1$ | $1$ | $1$ | $1$ |
> | $C_\beta$ | $1$ | $-1$ | $1$ |
> | $\mathrm{St}$ | $2$ | $0$ | $-1$ |
>
> At $q=3$, the principal family is again empty, but both exceptional pairs remain. Choose $b$ of order four in $T$, put $a=(1+i\sqrt3)/2$, and put $\zeta=(-1+i\sqrt3)/2$. The seven class sizes are $1,1,4,4,4,4,6$, in the following order:
>
> | Character | $I$ | $-I$ | $u_1$ | $u_{-1}$ | $-u_1$ | $-u_{-1}$ | $c_b$ |
> |---|---:|---:|---|---|---|---|---:|
> | $1$ | $1$ | $1$ | $1$ | $1$ | $1$ | $1$ | $1$ |
> | $X_+$ | $1$ | $1$ | $\zeta$ | $\overline\zeta$ | $\zeta$ | $\overline\zeta$ | $1$ |
> | $X_-$ | $1$ | $1$ | $\overline\zeta$ | $\zeta$ | $\overline\zeta$ | $\zeta$ | $1$ |
> | $C_\beta$ | $2$ | $-2$ | $-1$ | $-1$ | $1$ | $1$ | $0$ |
> | $W_+$ | $2$ | $-2$ | $a$ | $\overline a$ | $-a$ | $-\overline a$ | $0$ |
> | $W_-$ | $2$ | $-2$ | $\overline a$ | $a$ | $-\overline a$ | $-a$ | $0$ |
> | $\mathrm{St}$ | $3$ | $3$ | $0$ | $0$ | $0$ | $0$ | $-1$ |
>
> Thus no assumption of perfectness of $SL_2(F)$, valid only beyond the small cases, has entered the argument.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced Representations and Frobenius Reciprocity]]
- [[06 - Representation Theory/Concepts/Isotypic Components and Clifford Theory|Isotypic Components and Clifford Theory]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]

## Notes

- **Source and proof status:** The exercise [S2, Ch. XVIII, Ex. 11, printed p. 725, PDF p. 740] was checked on the original page image. The named $GL_2$ input, including the parameter identifications and character values, was checked in Theorem 12.6 and Tables 12.5(II)–(IV) at the precise printed/PDF anchors given in the proof. The class classification for $SL_2$, restriction identity, exceptional splitting, square-root values, and completeness argument are independent derivations.
- **Other proof inputs:** We use cyclicity of finite-field multiplicative groups, complex complete reducibility, Schur's lemma for scalar central actions, and ordinary character orthogonality, including the equality between the number of irreducible characters and conjugacy classes. The needed transitivity of isotypic constituents is proved in the solution; no separate classification theorem for $SL_2$ is assumed.
- **Conventions:** Replacing the chosen nonsquare by another nonsquare leaves the columns unchanged. Replacing $\tau$ by $-\tau$ exchanges the labels within each exceptional pair. The two pairs can also be relabeled independently. These choices affect names, not the set of characters.
- **Computational check:** In addition to the proof, numerical evaluation of the torus roots of unity for $q=2,3,4,5,7,8,9,11,13,16,25$ verified the weighted row inner products, the sum of the class sizes, and the sum of squared degrees. The latter two equal $q(q^2-1)$ in every case; the computed character Gram matrices were identity matrices to numerical precision. This finite check is not used to establish the general formulas.
