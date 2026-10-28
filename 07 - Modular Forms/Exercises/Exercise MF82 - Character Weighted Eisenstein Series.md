---
title: "Exercise MF82: Character Weighted Eisenstein Series"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.5, Exercise 4.5.1, printed p. 130, PDF p. 144"
source_refs:
  - "S7/ch-4/sec-5/ex-1"
created: 2026-10-28
---

# Exercise MF82: Character Weighted Eisenstein Series

## Problem Statement

> [!question] Original Exercise 4.5.1
> (a) Check that $\sum_{d\in(\mathbb Z/N\mathbb Z)^*}E_k^{(0,d)}$ is an element of $M_k(\Gamma_0(N))$.
>
> (b) Check that $\sum_{d\in(\mathbb Z/N\mathbb Z)^*}\overline\chi(d)E_k^{(0,d)}\in M_k(N,\chi)$.
>
> (c) Verify the calculations showing that $G_k^{\psi,\varphi}\in M_k(N,\psi\varphi)$.
>
> For (c), $k\ge3$, $N=uv$, $\psi$ is a Dirichlet character modulo $u$, $\varphi$ is primitive modulo $v$, $(\psi\varphi)(-1)=(-1)^k$, and
> $$
> G_k^{\psi,\varphi}=\sum_{c=0}^{u-1}\sum_{d=0}^{v-1}\sum_{e=0}^{u-1}\psi(c)\overline\varphi(d)G_k^{\overline{(cv,d+ev)}}.
> $$

## Hints

> [!hint]- Hint 1
> For $\gamma\in\Gamma_0(N)$, a row $(0,d)$ maps to $(0,dd_\gamma)$ modulo $N$.

> [!hint]- Hint 2
> For (c), write $\gamma=\left(\begin{smallmatrix}A&B\\C&D\end{smallmatrix}\right)$ and track the three residue indices. Use $AD\equiv1\pmod N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The transformation rule for the principal-level series is $E_k^{\overline v}[\gamma]_k=E_k^{\overline v\gamma}$ and the identical rule holds for $G_k^{\overline v}$. Every finite sum used here is already holomorphic on $\mathcal H$ and at cusps, so it remains to check its transformation character.
>
> **(a).** If $\gamma\in\Gamma_0(N)$ has lower-right entry $D$, then $(0,d)\gamma\equiv(0,dD)\pmod N$. Its entry $D$ is a unit, so $d\mapsto dD$ permutes the unit residues. The unweighted sum is therefore invariant under $\gamma$, giving the asserted membership.
>
> **(b).** Reindexing by $d'=dD$ gives $\overline\chi(d)=\overline\chi(d'D^{-1})=\chi(D)\overline\chi(d')$. Thus the weighted sum transforms by $\chi(D)$, which is the definition of $M_k(N,\chi)$.
>
> **(c).** Since $C\equiv0\pmod N$, the transformed row is
> $$
> (cv,d+ev)\gamma\equiv(cAv,\ dD+v(cB+eD))\pmod N.
> $$
> Choose $c'\in\{0,\ldots,u-1\}$ and $d'\in\{0,\ldots,v-1\}$ by $c'\equiv cA\pmod u$, $d'\equiv dD\pmod v$. Put $q=(d'-dD)/v$, and choose $e'\in\{0,\ldots,u-1\}$ by
> $$
> e'\equiv cB+eD-q\equiv(e+c'B)D-q\pmod u.
> $$
> The latter equality uses $c'D\equiv cAD\equiv c\pmod u$. Then the transformed row is $(c'v,d'+e'v)\pmod N$, exactly as asserted in the source. This reindexing is a bijection: rows with first coordinate divisible by $v$ have a unique parametrization by $(c,d,e)$, and multiplication by $\gamma$ and $\gamma^{-1}$ preserves that row set.
>
> Because $A,D$ are units and $AD\equiv1$, character multiplicativity, including zero values on nonunits, gives
> $$
> \psi(c)=\psi(D)\psi(c'),\qquad \overline\varphi(d)=\varphi(D)\overline\varphi(d').
> $$
> Thus every weight becomes $(\psi\varphi)(D)\psi(c')\overline\varphi(d')$, proving $G_k^{\psi,\varphi}[\gamma]_k=(\psi\varphi)(D)G_k^{\psi,\varphi}$. Terms of nonzero weight use order-$N$ rows: a prime dividing $v$ cannot divide $d+ev$ when $\varphi(d)\ne0$, and a prime dividing $u$ but not $v$ cannot divide $cv$ when $\psi(c)\ne0$. Hence all nonzero summands are legitimate principal-level modular forms. This completes the membership proof.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.5.1, printed p. 130 / PDF p. 144]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The weighted constructions and explicit $c',d',e'$ formulas are on printed pp.126–127/PDF pp.140–141. The exercise itself uses $E$ in (a),(b), while the surrounding preliminary example uses $G$; both have the same verified transformation rule.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
